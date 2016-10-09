export const hidePictures = (picturesSelected, pictures) => {
  //when it is an appropriate name pictures that need to hide the picture in the array, then
  //in element of array (which corresponds to this name) instead of the mark pictures (which corresponds to the title)
  //recorded picture with a question mark(images/question.png)
  const HIDE_IMAGE = 'images/question.png';
  const picturesWithHiddenImages = pictures.map( item => {
    if (picturesSelected[0] === item.title || picturesSelected[1] === item.title) { 
      return {
        visiblePictureOnClick: true,
        title: item.title,
        image: item.image,
        hideImage: HIDE_IMAGE
      } 
    } else {
      return {
        visiblePictureOnClick: item.visiblePictureOnClick,
        title: item.title,
        image: item.image,
        hideImage: item.hideImage
      } 
    }
  })
  return picturesWithHiddenImages;
} 