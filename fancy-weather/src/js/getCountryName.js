export default async function getCountryName(obj, lang){
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${obj.city.coord.lat},${obj.city.coord.lon}&pretty=1&key=682e213391ed4571bf1c9fd0dfba70c3&language=${lang}`;
  const response = await fetch(url);
  const result = await response.json();
  return result.results[0].components.country;
}