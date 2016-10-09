export const sortingPicturebyRise = pictures => {
  //before sorting each element of array is assigned a unique number,
  //which will be used to sort ascending
  const picturesWithUniqueNumbers = pictures.map( item => {
    const randomNumber = Math.round(Math.random() * 100);
    return {
      visiblePictureOnClick: true,
      number: randomNumber,
      title: item.title,
      image: item.image,
      hideImage: item.hideImage
    } 
  })
  const sortingByRise = (a, b) => {
    if (a.number > b.number) return 1;
    if (a.number < b.number) return -1;
  }
  const picturesWithSorting = picturesWithUniqueNumbers.sort(sortingByRise);
  return picturesWithSorting;
} 
