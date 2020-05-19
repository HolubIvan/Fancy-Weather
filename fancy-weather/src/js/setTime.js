import {wrapper, changeBackgroundArrows, languageChangeWrapper, languageChangeHeader, languageChangeButtons, languageChangeCurrentLang, mainContainer, buttonCitySearch, inputCitySearch,  temperatureButton, temperatureFahrenheit, temperatureCelsius, microphone, currentDate} from './variables';

// export default function setRunningTime(timezone){
//   const date = new Date().toLocaleString('en-EN',{ weekday: 'short',  day: 'numeric' ,month: 'long' ,hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: timezone, hour12: false});
//   document.querySelector('.current__date').innerHTML = date;
//   setInterval(setRunningTime.bind(null, timezone) ,1000);
// }

export default function setRunningTime(timezone, lang){
  setInterval(() => {
    const date = new Date();
    const update = date.toLocaleString(`${lang}-${lang.toUpperCase()}`,{ weekday: 'short',  day: 'numeric' ,month: 'long' ,hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: timezone, hour12: false});
    document.querySelector('.current__date').innerHTML = update;
  }, 1000);
}