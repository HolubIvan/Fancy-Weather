// add voice forecast

export default function audioForecast(language){
  const currentTemperatureDom = document.querySelector('.current__temperature');
  const currentOvercastDom = document.querySelector('.details__clouds');
  const currentWindDom = document.querySelector('.details__wind');
  const currentTemperatureFeelsDom = document.querySelector('.details__feels');
  const currentHumidityDom = document.querySelector('.details__humidity');

  var weatherForecast;

  var speech = new SpeechSynthesisUtterance();
  var voices = window.speechSynthesis.getVoices();
  speech.default = false;


  if(language === 'en'){
    weatherForecast = `The temperature is ${currentTemperatureDom.textContent} degrees now. ${currentOvercastDom.textContent}. Temperature is ${currentTemperatureFeelsDom.textContent}. ${currentWindDom.textContent}. ${currentHumidityDom.textContent}.`;
  
    speech.voice = voices.filter(function(voice) { return voice.name == 'Alex'; })[0];
    speech.lang = 'en-EN';

  } else if (language === 'ru' || language === 'be'){
    weatherForecast = `Текущая температура ${currentTemperatureDom.textContent} градусов. Текущая облачность: ${currentOvercastDom.textContent}. Температура ${currentTemperatureFeelsDom.textContent}. Ветер ${currentWindDom.textContent.split(' ')[1]} метров в секунду. ${currentHumidityDom.textContent}.`;

    speech.voice = voices.filter(function(voice) { return voice.name == 'Milena'; })[0];
    speech.lang = 'ru-RU';
  }

  speech.text = weatherForecast;
  window.speechSynthesis.speak(speech);
  
}




// var speech = new SpeechSynthesisUtterance(phrase);
// var voices = window.speechSynthesis.getVoices();
// speech.default = false;
// speech.voice = voices.filter(function(voice) { return voice.name == 'Alex'; })[0];
// speech.lang = 'en-EN';
// window.speechSynthesis.speak(speech);