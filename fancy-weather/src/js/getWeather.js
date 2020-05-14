export {getWeather};

async function getWeather(city, lang = 'en'){
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=${lang}&units=metric&APPID=22995dafe5ea1f2d320ae0de0c105c66`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
}