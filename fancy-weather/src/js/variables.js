// eslint-disable-next-line no-use-before-define
export {wrapper, changeBackgroundArrows, languageChangeWrapper, languageChangeHeader, languageChangeButtons, languageChangeCurrentLang, mainContainer, buttonCitySearch, inputCitySearch, temperatureButton, temperatureFahrenheit, temperatureCelsius, microphone, currentDate, currentCity, cityError, audioForecastButton, months};

const wrapper = document.querySelector('.wrapper');
const mainContainer = document.querySelector('.main');
const changeBackgroundArrows = document.querySelector('.arrows-block');

const languageChangeWrapper = document.querySelector('.language');
const languageChangeHeader = document.querySelector('.language__change');
const languageChangeCurrentLang = document.querySelector('.language__change_lang');
const languageChangeButtons = document.querySelector('.language__buttons');
const buttonCitySearch = document.querySelector('.city-search__button');
const inputCitySearch = document.querySelector('.city-search__input');
const temperatureButton = document.querySelector('.temperature');
const temperatureFahrenheit = document.querySelector('.temperature__fahrenheit');
const temperatureCelsius = document.querySelector('.temperature__celsius');
const microphone = document.querySelector('.city-search__microphone');
const currentDate = document.querySelector('.current__date');
const currentCity = document.querySelector('.current__city');
const cityError = document.querySelector('.error');
const audioForecastButton = document.querySelector('.audio-information');

const months = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December'
}