import { 
  SHOW_PICTURE_SELECTED, 
  HIDE_PICTURES_SELECTED, 
  GET_PICTURES_FROM_FILE_REQUEST,
  GET_PICTURES_FROM_FILE_SUCCESS, 
  COUNT_SCORE_GAME
} from '../constants/Page'

const initialState = {
  pictures: [],
  picturesSelected: [],
  visibleLoadingPage: false,
  score: 0,
  coefficient: 1
}

export default function page(state = initialState, action) {
  switch (action.type) {
    case SHOW_PICTURE_SELECTED:
      return { ...state, pictures: action.payload.pictures, picturesSelected: action.payload.picturesSelected }
    case HIDE_PICTURES_SELECTED:
      return { ...state, pictures: action.payload.pictures, picturesSelected: action.payload.picturesSelected }
    case GET_PICTURES_FROM_FILE_REQUEST:
      return { ...state, visibleLoadingPage: true }
    case GET_PICTURES_FROM_FILE_SUCCESS:
      return { ...state, pictures: action.payload, visibleLoadingPage: false, score: 0, coefficient: 1 }
    case COUNT_SCORE_GAME:
      return { ...state, score: action.payload.score, coefficient: action.payload.coefficient }

    default:
      return state;
  }

}