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

import {wrapper, changeBackgroundArrows, languageChangeWrapper, languageChangeHeader, languageChangeButtons, languageChangeCurrentLang, mainContainer, buttonCitySearch, inputCitySearch} from './variables';
import {currentLocation} from './location';
import {getWeather} from './getWeather';
import {getRandomBackground} from './randomPhotoBackground';
import {languageOpenCloseMenu, changeLanguage} from './languageChange';
import Weather from './Weather';
import initMapOnLayout from './map';






// get random background to wrapper when arrows button clicked
changeBackgroundArrows.addEventListener('click', async ()=> {
  const background = await getRandomBackground();
  wrapper.style.backgroundImage = `url(${background})`;
})


// Open or Close language menu and change styles
languageChangeWrapper.addEventListener('click', ()=>{
    languageOpenCloseMenu();
});

languageChangeButtons.addEventListener('click', (event)=>{
  event.preventDefault();
  changeLanguage(event);
}) 


buttonCitySearch.addEventListener('click', async (event)=>{
  event.preventDefault();
  const input = inputCitySearch.value;
  const currentWeather = await getWeather(input);
  mainContainer.innerHTML = new Weather(currentWeather).createWeather();
  initMapOnLayout(currentWeather);
})


window.addEventListener('load', async ()=>{
  const location = await currentLocation();
  const currentWeather = await getWeather(location);
  mainContainer.innerHTML = new Weather(currentWeather).createWeather();
  initMapOnLayout(currentWeather);
})

