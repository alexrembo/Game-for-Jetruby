import React, { PropTypes, Component } from 'react'

export default class ScorePanel extends Component {
    static propTypes = {
    bestScore: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired
  }
  render() {
    const { score, bestScore } = this.props
    return <div className='col-xs-3 col-xs-offset-2 col-sm-5 col-sm-offset-3 col-md-6 '>
      <ul className='score-panel'>
        <li className='score'>Score: {score}</li>
        <li className='bestScore'>Best score: {bestScore}</li>
      </ul>
    </div>
  }
}
