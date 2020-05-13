import '../css/abstracts/_variables.scss';
import {wrapper, changeBackgroundArrows, languageChangeWrapper, languageChangeHeader, languageChangeButtons, languageChangeCurrentLang} from './variables';

export {languageOpenCloseMenu, changeLanguage};


let isOpen = false;

const languageOpenCloseMenu = ()=>{
  if(isOpen === false){
    languageChangeButtons.style.display = 'block';
    languageChangeHeader.style.borderBottomRightRadius = '0';
    languageChangeHeader.style.borderBottomLeftRadius = '0';
    languageChangeHeader.style.backgroundColor = '#f38630';
    isOpen = true;
  } else if (isOpen === true){
    languageChangeButtons.style.display = 'none';
    languageChangeHeader.style.borderBottomRightRadius = '8px';
    languageChangeHeader.style.borderBottomLeftRadius = '8px';
    languageChangeHeader.style.backgroundColor = '#abddf6';
    isOpen = false;
  } 
}

const changeLanguage = (event)=>{
  const chosenLanguage = event.target.textContent;
  languageChangeCurrentLang.textContent = chosenLanguage;
}