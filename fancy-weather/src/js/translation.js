const fetch = require("node-fetch");
export {translateEngToBel, translateRusToBel};

async function translateEngToBel(word){
  const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200322T155651Z.de98a60e6a99185e.089aea4237b51c6db082c966f27a7895cd1e8b44&text=${word}&lang=en-be`;
  const response = await fetch(encodeURI(url));
  const data = await response.json();
  return data.text[0];
}

async function translateRusToBel(word){
  const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200322T155651Z.de98a60e6a99185e.089aea4237b51c6db082c966f27a7895cd1e8b44&text=${word}&lang=ru-be`;
  const response = await fetch(encodeURI(url));
  const data = await response.json();
  return data.text[0];
}