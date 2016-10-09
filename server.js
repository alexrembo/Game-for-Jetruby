'use strict';

const http = require('http');
const express = require('express');
const fs = require('fs');
const app = express();

(function initWebpack() {
  const webpack = require('webpack');
  const webpackConfig = require('./webpack/common.config');
  const compiler = webpack(webpackConfig);

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath,
  }));
  app.use(require('webpack-hot-middleware')(compiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000,
  }));
  app.use(require('body-parser').json())
  app.post('/save/result', (req, res) => {  
    const str = req.body; 
    fs.readFile( __dirname + '/' + 'data/usersbase.json', 'utf8', (err, data) => {
      const dataParse = JSON.parse(data);
      dataParse.users.push(str);
      console.log( data );
      fs.writeFile('data/usersbase.json', JSON.stringify(dataParse), err => {
        if (err) return console.log(err);
        console.log('Wrote!');
      });  
      res.end( JSON.stringify(dataParse));
    });
  });
  app.use(express.static(__dirname + '/'));
})();

app.get(/.*/, function root(req, res) {
  res.sendFile(__dirname + '/index.html');
});

const server = http.createServer(app);
server.listen(process.env.PORT || 3000, function onListen() {
  const address = server.address();
  console.log('Listening on: %j', address);
  console.log(' -> that probably means: http://localhost:%d', address.port);
});