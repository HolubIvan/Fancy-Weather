import {wrapper, changeBackgroundArrows, languageChangeWrapper, languageChangeHeader, languageChangeButtons, languageChangeCurrentLang, mainContainer, buttonCitySearch, inputCitySearch,  temperatureButton, temperatureFahrenheit, temperatureCelsius, microphone} from './variables';
import {getWeatherAndRenderToDom} from './index';

export default function audioCitySearch () {
  // eslint-disable-next-line global-require
  const path = require('./../audio/audioQuestion.mp3');
  const audio = new Audio(path);
  audio.play();

  setTimeout(()=>{
    const recognition = new SpeechRecognition();
    recognition.interimResults = false;
    recognition.start();

    recognition.onresult = (event)=>{
      const transcript = Array.from(event.results)
        .map(el => el[0])
        .map(el => el.transcript)
        .join('');
        inputCitySearch.value = transcript;
        getWeatherAndRenderToDom(transcript);
    }
  },1700)
}

