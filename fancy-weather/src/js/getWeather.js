// return object with all weather data and latitude, longitude, city name and else

export default async function getWeather(city, lang = 'en', units = 'metric'){
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=${lang}&units=${units}&APPID=22995dafe5ea1f2d320ae0de0c105c66`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data)
  return data;
}