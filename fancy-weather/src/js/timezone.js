// get timezone by 'Asia/Shanghai' format
export default async function getTimeZone(obj){
  const response = await fetch(`http://api.geonames.org/timezoneJSON?lat=${obj.city.coord.lat}&lng=${obj.city.coord.lon}&username=golubbb13`);
  const data = await response.json();
  return data.timezoneId;
}