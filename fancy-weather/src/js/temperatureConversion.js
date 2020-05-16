import {wrapper, changeBackgroundArrows, languageChangeWrapper, languageChangeHeader, languageChangeButtons, languageChangeCurrentLang, mainContainer, buttonCitySearch, inputCitySearch, temperatureButton, temperatureFahrenheit, temperatureCelsius} from './variables';

export {celsiusToFahrenheit , fahrenheitToCelsius, changeActiveTemperatureStyle};

const celsiusToFahrenheit = (temp)=>{
  return temp * 1.8 + 32;
}

const fahrenheitToCelsius = (temp)=>{
  return (temp - 32) / 1.8;
}

const changeActiveTemperatureStyle = (event)=>{
  if(event.target.getAttribute('data') === 'celsius'){
    temperatureCelsius.classList.add('active-temperature');
    temperatureFahrenheit.classList.remove('active-temperature');
    temperatureFahrenheit.removeAttribute('disabled');
    temperatureFahrenheit.style.cursor = 'pointer';
    temperatureCelsius.setAttribute('disabled', 'true');
    temperatureCelsius.style.cursor = 'default';
  } else if (event.target.getAttribute('data') === 'fahrenheit'){
    temperatureCelsius.classList.remove('active-temperature');
    temperatureFahrenheit.classList.add('active-temperature');
    temperatureCelsius.removeAttribute('disabled');
    temperatureCelsius.style.cursor = 'pointer';
    temperatureFahrenheit.setAttribute('disabled', 'true');
    temperatureFahrenheit.style.cursor = 'default';
  }
}