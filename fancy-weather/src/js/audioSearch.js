import {wrapper, changeBackgroundArrows, languageChangeWrapper, languageChangeHeader, languageChangeButtons, languageChangeCurrentLang, mainContainer, buttonCitySearch, inputCitySearch,  temperatureButton, temperatureFahrenheit, temperatureCelsius, microphone} from './variables';
import {getWeatherAndRenderToDom} from './index';
import {timer} from './index';
 
export default function audioCitySearch () {
  clearInterval(timer);

  microphone.style.transform = 'scale(1.15)';
  microphone.style.opacity = '1';
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

        microphone.style.transform = 'scale(1)';
        microphone.style.opacity = '.6';

        inputCitySearch.value = transcript;
        getWeatherAndRenderToDom(transcript);
    }
  },1700)
}

