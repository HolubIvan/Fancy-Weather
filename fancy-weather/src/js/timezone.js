// get timezone by 'Asia/Shanghai' format

// eslint-disable-next-line consistent-return
export default async function getTimeZone(obj){
  const url = `http://api.geonames.org/timezoneJSON?lat=${obj.city.coord.lat}&lng=${obj.city.coord.lon}&username=golubbb13`;
  try{
    const response = await fetch(url);
    const data = await response.json();
    return data.timezoneId;
  }catch(error){
    // eslint-disable-next-line no-console
    console.log(error)
  }
}