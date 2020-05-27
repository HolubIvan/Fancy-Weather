// get timezone by 'Asia/Shanghai' format

// eslint-disable-next-line consistent-return
export default async function getTimeZone(obj, language){
  const url = `https://dev.virtualearth.net/REST/v1/timezone/${obj.city.coord.lat},${obj.city.coord.lon}?key=AhcCkVUojoZHAmg5bDb27HfR1SkSHssFDfBCVbE_kfqhtxY4qH2pioFcY3qNbGUF`;
  try{
    const response = await fetch(url);
    const data = await response.json();
    return data.resourceSets[0].resources[0].timeZone.ianaTimeZoneId;
  }catch(error){
    // eslint-disable-next-line no-console
    console.log(error)
    return false;
  }
}