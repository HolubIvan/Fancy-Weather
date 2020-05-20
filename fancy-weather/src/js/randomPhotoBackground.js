import {wrapper, changeBackgroundArrows, languageChangeWrapper, languageChangeHeader, languageChangeButtons, languageChangeCurrentLang, mainContainer, buttonCitySearch, inputCitySearch,  temperatureButton, temperatureFahrenheit, temperatureCelsius, microphone, currentDate, currentCity} from './variables';

export {changeBackground};

// return url link with random photo

// eslint-disable-next-line consistent-return
async function getRandomBackground(location){
  const url = `https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=${location}&client_id=WwYdsWKYkxqd2zp0cTzMmSfSdKBIqZYvGFKB8DSAgjw`;
  try{
    const response = await fetch(url);
    const data = await response.json();
    return data.urls.regular;
  }catch(error){
    console.log(`Error is ${error}`);
  }
}


async function changeBackground(location){
  const background = await getRandomBackground(location);
  if(background === undefined){
    wrapper.style.backgroundImage = `url('./../img/forest.jpg')`;
  } else {
    wrapper.style.backgroundImage = `url(${background})`;
  }
}