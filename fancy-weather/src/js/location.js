// return city name

// eslint-disable-next-line consistent-return
export default async function currentLocation (){
    const url = 'https://ipinfo.io/json?token=c2d6b524791987';
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.city;
  } catch(error){
    // eslint-disable-next-line no-console
    console.log(error)
  }
}
