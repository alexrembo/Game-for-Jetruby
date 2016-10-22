import $ from 'jquery'
import _ from 'underscore'
import { formatDate } from '../utils/formatDate'
import {
  SAVE_USER_RESULT_REQUEST,
  SAVE_USER_RESULT_SUCCES,
  GET_USERS_RESULTS_REQUEST,
  GET_USERS_RESULTS_SUCCESS,
  CHANGE_SAVED_RESULT_STATUS
} from '../constants/User'

export const saveUserResult = (userName, totalScore) => {
  return function(dispatch) {
     dispatch({
      type: SAVE_USER_RESULT_REQUEST 
    })
    const API_URL = 'http://localhost:3000/save/result';
    const currentDate = formatDate(new Date());
    const userResult = {
      name: userName,
      score: totalScore,
      date: currentDate
    }
    //users result is sent to the server where it is stored in file 'usersbase.json'
    $.ajax(API_URL, {
      type: 'POST',
      data: JSON.stringify(userResult),
      contentType: 'application/json',
      success: data => { 
        const dataParse = JSON.parse(data);
        //all users data is sorted by the law
        const usersResultsWithSortByFall = dataParse.users.sort( (a, b) => {            
          return a.score < b.score;
        })
        //among all the objects find the one where the largest score
        const bestUser = _.max(dataParse.users, userInfo => { return userInfo.score; });
        const bestScore = bestUser.score;
        dispatch({
          type: SAVE_USER_RESULT_SUCCES,
          payload: {
            bestScore: bestScore,
            usersResults: usersResultsWithSortByFall
          }
        })
      }
    })
  } 
}

export const getUsersResults = () => {
  return dispatch => {
    dispatch({
      type: GET_USERS_RESULTS_REQUEST
    })
    const USERS_BASE_URL = 'data/usersbase.json';
    $.ajax({
      type: 'GET',
      url: USERS_BASE_URL,
      async: false,
      dataType: 'json',
      success: data => {
        //all users data is sorted by the law
        const usersResultsWithSortByFall = data.users.sort( (a,b) => {            
          return a.score < b.score;
        })
        //among all the objects find the one where the largest score
        const bestUser = _.max(data.users, function(userInfo){ return userInfo.score; });
        const bestScore = bestUser.score || 0;
        dispatch({
          type: GET_USERS_RESULTS_SUCCESS,
          payload: {
            bestScore: bestScore,
            usersResults: usersResultsWithSortByFall
          }
        })
      } 
    })  
  } 
}
//this function is used to update the state of the 
//users form (which send data to server), when you restart the game
export const changeSavedResultStatus = () => {
  return {
    type: CHANGE_SAVED_RESULT_STATUS
  }
}

