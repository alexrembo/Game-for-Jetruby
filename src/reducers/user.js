import {
  SAVE_USER_RESULT_REQUEST,
  SAVE_USER_RESULT_SUCCES,
  GET_USERS_RESULTS_REQUEST,
  GET_USERS_RESULTS_SUCCESS,
  CHANGE_SAVED_RESULT_STATUS
} from '../constants/User'

const initialState = {
  statusSavedResult: true,
  bestScore: 0,
  usersResults: []
}

export default function user(state = initialState, action) {
  switch(action.type) {
    case SAVE_USER_RESULT_REQUEST:
      return { ...state }
    case SAVE_USER_RESULT_SUCCES:
      return { ...state, 
        bestScore: action.payload.bestScore, 
        usersResults: action.payload.usersResults, 
        statusSavedResult: false 
      }
    case GET_USERS_RESULTS_REQUEST:
      return { ...state }
    case GET_USERS_RESULTS_SUCCESS:
      return { ...state, 
        bestScore: action.payload.bestScore, 
        usersResults: action.payload.usersResults 
      }
    case CHANGE_SAVED_RESULT_STATUS:
      return { ...state, 
        statusSavedResult: true 
      }        

    default:
      return state
  }

}