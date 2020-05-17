import {wrapper, changeBackgroundArrows, languageChangeWrapper, languageChangeHeader, languageChangeButtons, languageChangeCurrentLang, mainContainer, buttonCitySearch, inputCitySearch,  temperatureButton, temperatureFahrenheit, temperatureCelsius, microphone} from './variables';

export{setUserTemperatureSettings, setUserLangSettings};

function setUserTemperatureSettings(){
  if(localStorage.getItem('temperature') === 'metric'){
    temperatureButton.setAttribute('active', 'metric');
    temperatureCelsius.classList.add('active-temperature');
    temperatureFahrenheit.classList.remove('active-temperature');
    temperatureFahrenheit.removeAttribute('disabled');
    temperatureFahrenheit.style.cursor = 'pointer';
    temperatureCelsius.setAttribute('disabled', 'true');
    temperatureCelsius.style.cursor = 'default';
  } else if (localStorage.getItem('temperature') === 'imperial'){
    temperatureButton.setAttribute('active', 'imperial');
    temperatureCelsius.classList.remove('active-temperature');
    temperatureFahrenheit.classList.add('active-temperature');
    temperatureCelsius.removeAttribute('disabled');
    temperatureCelsius.style.cursor = 'pointer';
    temperatureFahrenheit.setAttribute('disabled', 'true');
    temperatureFahrenheit.style.cursor = 'default';
  } else {
    localStorage.setItem('temperature', 'metric');
  }
}

function setUserLangSettings(){
  if(localStorage.getItem('lang') === 'en'){
    languageChangeCurrentLang.textContent = localStorage.getItem('lang').toUpperCase();
  } else if (localStorage.getItem('lang') === 'ru'){
    languageChangeCurrentLang.textContent = localStorage.getItem('lang').toUpperCase();
  } else if (localStorage.getItem('lang') === 'be'){
    languageChangeCurrentLang.textContent = localStorage.getItem('lang').toUpperCase();
  } else {
    localStorage.setItem('lang', 'en');
    languageChangeCurrentLang.textContent = localStorage.getItem('lang').toUpperCase();
  }
}