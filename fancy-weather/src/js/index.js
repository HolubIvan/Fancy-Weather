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
import '../css/pages/_home.scss';
import '../css/themes/_default.scss';

// JS MODULES

import {wrapper, changeBackgroundArrows, languageChangeWrapper, languageChangeHeader, languageChangeButtons, languageChangeCurrentLang, mainContainer, buttonCitySearch, inputCitySearch,  temperatureButton, temperatureFahrenheit, temperatureCelsius} from './variables';
import currentLocation from './location';
import getWeather from './getWeather';
import getRandomBackground from './randomPhotoBackground';
import {languageOpenCloseMenu, changeLanguage} from './languageChange';
import Weather from './Weather';
import initMapOnLayout from './map';
import getTimeZone from './timezone';
import {celsiufToFarengeit , farengeitToCelsius, changeActiveTemperatureStyle} from './temperatureConversion';





// get random background to wrapper when arrows button clicked
changeBackgroundArrows.addEventListener('click', async ()=> {
  const background = await getRandomBackground();
  wrapper.style.backgroundImage = `url(${background})`;
})

// MAIN FUNCTION to get weather and render by class to DOM
const getWeatherAndRenderToDom = async (location)=>{
  const language = languageChangeCurrentLang.textContent.toLowerCase();
  const temperatureUnit = temperatureButton.getAttribute('active'); // celsius or fahrenheit
  const currentWeather = await getWeather(location, language, temperatureUnit);  // get weather obj with latitude, longitude, weather details
  const timezone = await getTimeZone(currentWeather); // get timezone by 'Asia/Shanghai' format
  mainContainer.innerHTML = new Weather(currentWeather, timezone).createWeather(); // create layout and render inside DOM
  initMapOnLayout(currentWeather);
}


// change temperature scale

temperatureButton.addEventListener('click', async (event)=>{
  event.preventDefault();
  changeActiveTemperatureStyle(event);
  if(event.target.getAttribute('data') === 'fahrenheit'){

    if(inputCitySearch.value === ''){
      const location = await currentLocation();
      await getWeatherAndRenderToDom(location);
    } else {
      const input = inputCitySearch.value;
      await getWeatherAndRenderToDom(input);
    }

  } else if (event.target.getAttribute('data') === 'celsius'){
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

languageChangeButtons.addEventListener('click', (event)=>{
  event.preventDefault();
  changeLanguage(event);
  // if(inputCitySearch.value === ''){
    
  // } else {
    
  // }
}) 


buttonCitySearch.addEventListener('click', async (event)=>{
  event.preventDefault();
  const input = inputCitySearch.value;
  await getWeatherAndRenderToDom(input);
})

window.addEventListener('load', async ()=>{
  const location = await currentLocation();
  await getWeatherAndRenderToDom(location);
})
