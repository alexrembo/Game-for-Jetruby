import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from '../components/User'
import Page from '../components/Page'
import { bindActionCreators } from 'redux'
import * as pageActions from '../actions/PageActions'
import * as userActions from '../actions/UserActions'
import './style.scss'

class App extends Component {
  render() {
    const { bestScore, statusSavedResult, usersResults } = this.props.user
    const { pictures, picturesSelected, score, coefficient, visibleLoadingPage } = this.props.page
    const { showPictureSelected, hidePicturesSelected, getPicturesFromFile, countScoreGame } = this.props.pageActions
    const { saveUserResult, getUsersResults, changeSavedResultStatus } = this.props.userActions
    return <div className='row'>
      <User 
        bestScore={bestScore} 
        saveUserResult={saveUserResult} 
        score={score} 
        getUsersResults={getUsersResults}
        pictures={pictures} 
        visibleLoadingPage={visibleLoadingPage} 
        changeSavedResultStatus={changeSavedResultStatus}
        statusSavedResult={statusSavedResult} 
        getPicturesFromFile={getPicturesFromFile} 
      usersResults={usersResults} />
      <Page 
        pictures={pictures} 
        picturesSelected={picturesSelected} 
        score={score} 
        coefficient={coefficient} 
        showPictureSelected={showPictureSelected} 
        hidePicturesSelected={hidePicturesSelected} 
        getPicturesFromFile={getPicturesFromFile} 
        countScoreGame={countScoreGame} 
      visibleLoadingPage={visibleLoadingPage} />
    </div>
  }
}

function mapStateToProps (state) {
  return {
    user: state.user,
    page: state.page
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)