// return url link with random photo

// eslint-disable-next-line consistent-return
export default async function getRandomBackground(){
  const url = 'https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=dark_forest&client_id=WwYdsWKYkxqd2zp0cTzMmSfSdKBIqZYvGFKB8DSAgjw';
  try{
    const response = await fetch(url);
    const data = await response.json();
    return data.urls.regular;
  }catch(error){
    console.log(`Error is ${error}`);
  }
}

