export {currentLocation};

async function currentLocation (){
  const url = 'https://ipinfo.io/json?token=c2d6b524791987';
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}
