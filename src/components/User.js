import React, { PropTypes, Component } from 'react'
import ResultsTable from './childs user/ResultsTable'
import ControlPanel from './childs user/ControlPanel'
import ScorePanel from './childs user/ScorePanel'

export default class User extends Component {
    constructor(props) {
    super(props)
    this.state = {
      visibleForm: false,
      userName: ''
    }
  }
  static propTypes = {
    bestScore: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
    visibleLoadingPage: PropTypes.bool.isRequired,
    statusSavedResult: PropTypes.bool.isRequired,
    saveUserResult: PropTypes.func.isRequired,
    usersResults: PropTypes.array.isRequired,
    getUsersResults: PropTypes.func.isRequired,
    changeSavedResultStatus: PropTypes.func.isRequired,
    getPicturesFromFile: PropTypes.func.isRequired
  }
  componentWillMount() {
    //when the page loads we get users rating with their results
    const { getUsersResults } = this.props 
    getUsersResults();
  }
  componentWillReceiveProps(nextProps) {
    const currentPictures = nextProps.pictures;
    const statusSavedResult = nextProps.statusSavedResult;
    //every time we get a new array of pictures, we check all the pairs have been found or not
    const findAllOpenPictures = item => {
      return item.visiblePictureOnClick  === false;
    }
    const statusGame = currentPictures.every(findAllOpenPictures);
    this.setState({visibleForm: statusGame && statusSavedResult});
  }
  startNewGame() {
    const { getPicturesFromFile, changeSavedResultStatus } = this.props
    //get a new array of pictures
    getPicturesFromFile();
    //this function is used to update the state of the 
    //users form (which send data to server), when you restart the game
    changeSavedResultStatus();
  }
  saveResult(e) {
    e.preventDefault();
    const { saveUserResult, score } = this.props
    const { userName } = this.state
    //after the end of the game (when we found all pairs)
    //we sent name and user score to the users database
    saveUserResult(userName, score);
    this.setState({userName: ''});
  }
  changeUserName(e) {
    //line to update the user name
    this.setState({userName: e.target.value});
  }
  render() {
    const { score, visibleLoadingPage, bestScore, usersResults } = this.props
    const { visibleForm, userName } = this.state
    return <div>
      <ResultsTable usersResults={usersResults} />
      { 
        visibleLoadingPage ? '' :
        <div>
          <ControlPanel 
            startNewGame={::this.startNewGame} 
            saveResult={::this.saveResult} 
            changeUserName={::this.changeUserName}
            userName={userName}
          visibleForm={visibleForm} />
          <ScorePanel 
            score={score} 
          bestScore={bestScore} />
        </div>    
      }
    </div>
  }
}

