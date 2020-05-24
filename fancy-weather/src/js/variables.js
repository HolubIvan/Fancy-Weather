// eslint-disable-next-line no-use-before-define
export {wrapper, changeBackgroundArrows, languageChangeWrapper, languageChangeHeader, languageChangeButtons, languageChangeCurrentLang, mainContainer, buttonCitySearch, inputCitySearch, temperatureButton, temperatureFahrenheit, temperatureCelsius, microphone, currentDate, currentCity, cityError, audioForecastButton, };

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