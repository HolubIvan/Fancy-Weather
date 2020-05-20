// get timezone by 'Asia/Shanghai' format

// eslint-disable-next-line consistent-return
export default async function getTimeZoneAndCountry(obj, language){
  const url = `http://api.geonames.org/timezoneJSON?lat=${obj.city.coord.lat}&lng=${obj.city.coord.lon}&lang=${language}&username=golubbb13`;
  try{
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }catch(error){
    // eslint-disable-next-line no-console
    console.log(error)
    return false;
  }
}