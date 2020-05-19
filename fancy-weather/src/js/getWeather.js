// return object with all weather data and latitude, longitude, city name and else

// eslint-disable-next-line consistent-return
export default async function getWeather(city, lang = 'en', units = 'metric'){
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=${lang}&units=${units}&APPID=22995dafe5ea1f2d320ae0de0c105c66`;
  try{
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }catch(error){
    // eslint-disable-next-line no-console
    console.log(error)
  }
}