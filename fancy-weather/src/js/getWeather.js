const fetch = require("node-fetch");

import {wrapper, changeBackgroundArrows, languageChangeWrapper, languageChangeHeader, languageChangeButtons, languageChangeCurrentLang, mainContainer, buttonCitySearch, inputCitySearch,  temperatureButton, temperatureFahrenheit, temperatureCelsius, microphone, currentDate, currentCity, cityError} from './variables';

// return object with all weather data and latitude, longitude, city name and else

// eslint-disable-next-line consistent-return
export default async function getWeather(city, lang = 'en', units = 'metric'){
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=${lang}&units=${units}&APPID=22995dafe5ea1f2d320ae0de0c105c66`;
  try{
    const response = await fetch(url);
    const data = await response.json();
    
    if(data.cod === '404'){
      console.log(`Error: code: ${data.cod}, massage: ${data.message}`);
      cityError.textContent = data.message;
    } else {
      cityError.textContent = '';
    }

    return data;
  }catch(error){
    console.log(error)
    return false;
  }
}