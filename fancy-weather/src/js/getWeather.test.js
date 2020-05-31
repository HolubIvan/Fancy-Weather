import getWeather from './getWeather';

describe('getWeather', ()=>{

  expect.assertions(1);

  it('should return a weather object', () =>{
    return expect(getWeather('Moscow','en','metric')).resolves.toBeDefined();
  })

})