export {getRandomBackground};

async function getRandomBackground(){
  const url = 'https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=forest&client_id=WwYdsWKYkxqd2zp0cTzMmSfSdKBIqZYvGFKB8DSAgjw';
  try{
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.urls.full);
    return data.urls.full;
  }catch(error){
    console.log(`Error is ${error}`);
  }
}

