import $ from 'jquery'
import { 
  SHOW_PICTURE_SELECTED, 
  HIDE_PICTURES_SELECTED, 
  GET_PICTURES_FROM_FILE_REQUEST,
  GET_PICTURES_FROM_FILE_SUCCESS, 
  COUNT_SCORE_GAME
} from '../constants/Page'
import { showPicture } from '../utils/showPicture'
import { hidePictures } from '../utils/hidePictures'
import { sortingPicturebyRise } from '../utils/sortingPicturebyRise'
import { сalculateСurrentScore } from '../utils/сalculateСurrentScore'

export const showPictureSelected = (pictureSelect, picturesSelected, pictures) => {
  //add selected item to the selected items list, 
  //that function "hidePicturesSelected" to know which elements you want to hide
  const currentPicturesSelected = picturesSelected;
  currentPicturesSelected.push(pictureSelect);
  const picturesWithOpenImage = showPicture(pictureSelect, pictures);
  return {
    type: SHOW_PICTURE_SELECTED,
    payload: { 
      pictures: picturesWithOpenImage,
      picturesSelected: currentPicturesSelected
    }
  }
}  

export const hidePicturesSelected = (picturesSelected, pictures) => {
  //all names in the title of each picture is shown with index (1 or 2), 
  //to compare each pair of pictures, we cut off the index
  const firstNamePictureSelected = picturesSelected[0].slice(0, picturesSelected[0].length-1);
  const secondNamePictureSelected = picturesSelected[1].slice(0, picturesSelected[1].length-1);
  //if the pictures have different names, then come back an array of pictures with already selected hidden picture,
  //if they match, the selected pair of pictures is not hidden
  const picturesWithHiddenImages = (firstNamePictureSelected !== secondNamePictureSelected) ? 
  hidePictures(picturesSelected, pictures) : pictures;
  return {
    type: HIDE_PICTURES_SELECTED,
    payload: { 
      pictures: picturesWithHiddenImages,
      //clears the list of selected images, for the following pair
      picturesSelected: []
    }
  }
}

export const getPicturesFromFile = () => {
  return dispatch => {
    dispatch({
      type: GET_PICTURES_FROM_FILE_REQUEST
    })
    const PICTURES_BASE_URL = 'data/picturesbase.json';
    $.ajax({
      type: 'GET',
      url: PICTURES_BASE_URL,
      async: false,
      dataType: 'json',
      success: data => {
        //we obtain the data from the file and at once sort them
        const picturesWithSorting = sortingPicturebyRise(data.pictures);
        setTimeout( () => {
          dispatch({
            type: GET_PICTURES_FROM_FILE_SUCCESS,
            payload: picturesWithSorting
          })
        }, 2000)
      }
    })  
  } 
}

export function countScoreGame(score, coefficient, picturesSelected) {
  //we consider the current value of the game score, 
  //and at once increase the coefficient for the next click
  const currentScore = сalculateСurrentScore(score, coefficient, picturesSelected);
  const currenCoefficient = coefficient + 0.2;
  return {
    type: COUNT_SCORE_GAME,
    payload: { 
      score: currentScore,
      coefficient: currenCoefficient
    }
  }
}