import getCountryName from './getCountryName';

const example = {
  city: {
    coord: {
      lat: 50.9216,
      lon: 34.8003
    }
  }
}

describe('getCountryName', ()=>{

  it('should return name of the country', async ()=>{
    await expect(getCountryName(example, 'ru')).resolves.toBeDefined();
   })

  it('should return name of the country', async ()=>{
   await expect(getCountryName(example, 'ru')).resolves.toEqual('Украина');
  })
})