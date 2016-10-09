export const showPicture = (pictureSelect, pictures) => {
  //when in matching the name of the selected pictures with the picture in the array, then
  //in element of array (which corresponds to this name) instead of a picture with a question mark(img/question.png)
  //recorded picture with the appropriate name
  const picturesWithOpenImage = pictures.map( item => {
    if (pictureSelect === item.title) {
      return {
        visiblePictureOnClick: false,
        title: item.title,
        image: item.image,
        hideImage: item.image
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
  return picturesWithOpenImage;
} 