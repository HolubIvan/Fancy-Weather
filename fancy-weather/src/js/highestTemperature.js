export default function getHighestTemperatureOfTheDay(arr){
  var result = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i].dt_txt.split(' ')[1] === '15:00:00'){
      result.push(arr[i].main.temp)
    }
  }
  return result;
}