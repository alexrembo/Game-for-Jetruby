export const сalculateСurrentScore = (score, coefficient, picturesSelected) => {
  const firstNamePictureSelected = picturesSelected[0].slice(0, picturesSelected[0].length-1);
  const secondNamePictureSelected = picturesSelected[1].slice(0, picturesSelected[1].length-1);
  //if the names of the pictures match, the score increases with coefficient factor, 
  //that with each step increases
  const currentScore = (firstNamePictureSelected === secondNamePictureSelected) ? Math.floor(score + 40 / coefficient) :
    (score > 0 && score - 20 / coefficient > 0) ? Math.floor(score - 20 / coefficient) : 0;
  return currentScore;
} 
