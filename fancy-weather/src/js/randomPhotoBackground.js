import {wrapper, changeBackgroundArrows, languageChangeWrapper, languageChangeHeader, languageChangeButtons, languageChangeCurrentLang, mainContainer, buttonCitySearch, inputCitySearch,  temperatureButton, temperatureFahrenheit, temperatureCelsius, microphone, currentDate, currentCity, months} from './variables';

export {changeBackground, getRandomBackground};

// return url link with random photo

// eslint-disable-next-line consistent-return
async function getRandomBackground(){
  const currentMonth = new Date().getMonth();
  const hours = new Date().getHours();
  const time = getTimeOfay(hours);
  const url = `https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=${months[currentMonth]}%20${time}&client_id=WwYdsWKYkxqd2zp0cTzMmSfSdKBIqZYvGFKB8DSAgjw`;
  try{
    const response = await fetch(url);
    const data = await response.json();
    console.log(`Background image has founded from unsplash by '${months[currentMonth]} ${time}' words`);
    return data.urls.regular;
  }catch(error){
    console.log(`Error is ${error}`);
  }
}


async function changeBackground(){
  const background = await getRandomBackground();
  if(background === undefined){
    wrapper.style.backgroundImage = `background: url('./../img/forest.jpg') center center no-repeat fixed;`;
  } else {
    wrapper.style.background = `linear-gradient(rgba(8, 15, 26, 0.59) 0%, rgba(17, 17, 46, 0.46) 100%) center center / cover fixed, url(${background}) center center/cover no-repeat fixed`;
  }
}

function getTimeOfay(time){
  if(time >= 5 && time <= 11){
    return 'morning';
  } else if (time > 11 && time <= 16 ){
    return 'day';
  } else if (time > 16 && time <= 22 ){
    return 'evening';
  } else if (time >= 0 < 5 || time == 23 || time == 24){
    return 'night'
  } else {
    return 'day'
  }
}