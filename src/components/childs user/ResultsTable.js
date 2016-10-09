import React, { PropTypes, Component } from 'react'

export default class ResultsTable extends Component {
  static propTypes = {
    usersResults: PropTypes.array.isRequired
  }
  render() {
    const { usersResults } = this.props
    return <div className='modal fade' id='myModal' role='dialog' aria-labelledby='myModalLabel' aria-hidden='true'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <button type='button' className='close' data-dismiss='modal' aria-hidden='true'>&times;</button>
            <h4 className='modal-title' id='myModalHead'>Results table</h4>
          </div>
          <div id='myModalBody' className='modal-body'>
          {
            usersResults.map( (item, index) => {
              return <div className='result-{index}' key={index}>
                <div>{index + 1}. {item.name} - {item.score}, date: {item.date}</div>
              </div>
            })
          }
          </div>
          <div className='modal-footer'>
            <button type='button' className='btn btn-default' data-dismiss='modal'>Закрыть</button>
          </div>
        </div>
      </div>
    </div>
	}
}