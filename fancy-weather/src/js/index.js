// STYLES IMPORTS

import '../css/style.css';
import '../css/abstracts/_variables.scss';
import '../css/abstracts/_functions.scss';
import '../css/abstracts/_mixins.scss';
import '../css/vendors/_normalize.scss';
import '../css/base/_base.scss';
import '../css/base/_fonts.scss';
import '../css/base/_typography.scss';
import '../css/base/_helpers.scss';
import '../css/layout/_header.scss';
import '../css/layout/_main.scss';
import '../css/layout/_footer.scss';
import '../css/components/_button.scss';
import '../css/components/_arrow-block.scss';
import '../css/components/_language.scss';
import '../css/components/_temperature.scss';
import '../css/components/_city-search.scss';
import '../css/components/_audio-information.scss';
import '../css/pages/_home.scss';
import '../css/themes/_default.scss';

// JS MODULES

import {wrapper, changeBackgroundArrows, languageChangeWrapper, languageChangeHeader, languageChangeButtons, languageChangeCurrentLang, mainContainer, buttonCitySearch, inputCitySearch, temperatureButton, temperatureFahrenheit, temperatureCelsius, microphone, currentDate, currentCity, cityError, audioForecastButton} from './variables';
import currentLocation from './location';
import getWeather from './getWeather';
import {changeBackground} from './randomPhotoBackground';
import {languageOpenCloseMenu, changeLanguage} from './languageChange';
import {Weather, WeatherBel} from './Weather';
import initMapOnLayout from './map';
import getTimeZoneAndCountry from './timezoneAndCountry';
import {changeActiveTemperatureStyle} from './temperatureBlockStyle';
import audioCitySearch from './audioSearch';
import {weatherIcons} from "./weatherIcons";
import getIcons from './getIcon';
import {setUserTemperatureSettings, setUserLangSettings} from './userSettings';
import setRunningTime from './setTime';
import {belTranslation} from './belTranslation';
import {translateEngToBel, translateRusToBel} from './translation';
import audioForecast from './audioForecast';

export {getWeatherAndRenderToDom};
export {timer};

// set timer variable as global
var timer;

// audio search handler
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
microphone.addEventListener('click', audioCitySearch);


// audio forecast handler
audioForecastButton.addEventListener('click', ()=>{
  const language = localStorage.getItem('lang');
  audioForecast(language);
})


// get random background to wrapper when arrows button clicked
changeBackgroundArrows.addEventListener('click', async ()=>{
  if(inputCitySearch.value === ''){
    const location = await currentLocation();
    await changeBackground(location);
  } else {
    const input = inputCitySearch.value;
    await changeBackground(input);
  }
});


// MAIN FUNCTION to get weather and render by class to DOM
const getWeatherAndRenderToDom = async (location)=>{

  // translate to Belarusian
  var cityTranslation;
  if (/^[a-zA-Z]+$/.test(location)){
    cityTranslation = await translateEngToBel(location);
  } else if (/^[а-яА-Я]+$/.test(location)){
    cityTranslation = await translateRusToBel(location);
  }

  const language = localStorage.getItem('lang');
  const temperature = localStorage.getItem('temperature'); // celsius or fahrenheit
  const currentWeather = await getWeather(location, language, temperature);  // get weather obj with latitude, longitude, weather details
  const timezoneAndCountry = await getTimeZoneAndCountry(currentWeather, language); // get timezone by 'Asia/Shanghai' format
  const icons = getIcons(currentWeather, weatherIcons); // get icon from icon object with svg icons by currentWeather id icon


  if(localStorage.getItem('lang') === 'en'){
    audioForecastButton.textContent = 'Listen';
    mainContainer.innerHTML = new Weather(currentWeather, timezoneAndCountry, icons, language).createWeatherEng(); // create layout and render inside DOM

  } else if (localStorage.getItem('lang') === 'ru'){
    audioForecastButton.textContent = 'Слушать';
    mainContainer.innerHTML = new Weather(currentWeather, timezoneAndCountry, icons, language).createWeatherRus(); // create layout and render inside DOM

  } else if(localStorage.getItem('lang') === 'be'){
    audioForecastButton.textContent = 'Слухайце';
    mainContainer.innerHTML = new WeatherBel(currentWeather, timezoneAndCountry, icons, language, belTranslation, cityTranslation).createWeatherBel(); // create layout and render inside DOM
  }
   timer = setInterval(() => {
    setRunningTime(timezoneAndCountry, language);  // render running time to layout
  }, 1000);

  initMapOnLayout(currentWeather); // init map by coordinates from weather object
}



// change temperature units
temperatureButton.addEventListener('click', async (event)=>{
  event.preventDefault();
  changeActiveTemperatureStyle(event);
  clearInterval(timer);
  if(event.target.getAttribute('data') === 'fahrenheit'){
    localStorage.setItem('temperature', 'imperial');
    if(inputCitySearch.value === ''){
      const location = await currentLocation();
      await getWeatherAndRenderToDom(location);
    } else {
      const input = inputCitySearch.value;
      await getWeatherAndRenderToDom(input);
    }

  } else if (event.target.getAttribute('data') === 'celsius'){
    localStorage.setItem('temperature', 'metric');
    if(inputCitySearch.value === ''){
      const location = await currentLocation();
      await getWeatherAndRenderToDom(location);
    } else {
      const input = inputCitySearch.value;
      await getWeatherAndRenderToDom(input);
    }
  }
})




// Open or Close language menu and change styles
languageChangeWrapper.addEventListener('click', ()=>{
    languageOpenCloseMenu();
});

languageChangeButtons.addEventListener('click', async (event)=>{
  event.preventDefault();
  changeLanguage(event);
  clearInterval(timer);
  if(inputCitySearch.value === ''){
    const location = await currentLocation();
    await getWeatherAndRenderToDom(location);
  } else {
    const input = inputCitySearch.value;
    await getWeatherAndRenderToDom(input);
  }
}) 


// search input handler
buttonCitySearch.addEventListener('click', async (event)=>{
  event.preventDefault();
  const input = inputCitySearch.value;
  // await changeBackground(input);
  clearInterval(timer);
  await getWeatherAndRenderToDom(input);
})

// get weather by current location
window.addEventListener('load', async ()=>{
  setUserTemperatureSettings();
  setUserLangSettings();
  clearInterval(timer);
  const location = await currentLocation();
  // changeBackground(location);
  await getWeatherAndRenderToDom(location);
})
