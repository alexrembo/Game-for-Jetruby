export const formatDate = date => {
  //function makes the date to the format "hours:minutes  day.month.year"
  const currentDate = [
    '0' + date.getDate(),
    '0' + (date.getMonth() + 1),
    '' + date.getFullYear(),
    '0' + date.getHours(),
    '0' + date.getMinutes()
  ];
  const currentFormatDate = currentDate.map( item => {
    return item.slice(-2);
  })
  return currentFormatDate.slice(3).join(':') + ' ' + currentFormatDate.slice(0, 3).join('.');
}