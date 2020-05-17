export default function getIcons(objWeather, icons){
  const iconsArr = [];
  iconsArr.push(icons[objWeather.list[0].weather[0].icon]);
  iconsArr.push(icons[objWeather.list[8].weather[0].icon]);
  iconsArr.push(icons[objWeather.list[16].weather[0].icon]);
  iconsArr.push(icons[objWeather.list[24].weather[0].icon]);
  return iconsArr;
}