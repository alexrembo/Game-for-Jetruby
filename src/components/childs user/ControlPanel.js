import React, { PropTypes, Component } from 'react'

export default class ControlPanel extends Component {
  static propTypes = {
    userName: PropTypes.string.isRequired,
    visibleForm: PropTypes.bool.isRequired,
    startNewGame: PropTypes.func.isRequired,
    saveResult: PropTypes.func.isRequired,
    changeUserName: PropTypes.func.isRequired
  }
  render() {
    const { startNewGame, saveResult, changeUserName, userName, visibleForm } = this.props
    return <div className='col-xs-6 col-xs-offset-4 col-md-6 control-panel'>
      <button type='button' 
        className='btn btn-default button-new-game' 
        onClick={startNewGame}>
        Start new Game 
      </button>
      <form 
        className='form-inline' 
        role='form' 
      onSubmit={saveResult}>
      <input 
        className='form-control'
        type='text'
        value={userName}  
        placeholder='Enter your name'
        onChange={changeUserName}
        disabled={(visibleForm ? '': 'disabled')}
        required>
      </input>
      <button 
        className='btn btn-default button-save'
        type='submit' 
        disabled={(visibleForm ? '': 'disabled')}>
        Save result
      </button>
    </form>
    <button type='button' 
      className='btn btn-default button-table-results' 
      data-toggle='modal' 
      data-target='#myModal'>
      Results table
    </button>
  </div>
  }
}