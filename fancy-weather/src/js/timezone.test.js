import getTimeZone from './timezone';

const example = {
  city: {
    coord: {
      lat: 50.9216,
      lon: 34.8003
    }
  }
}

describe('getTimeZone', ()=>{

  expect.assertions(1);

  it('should return an object', ()=>{
    expect(getTimeZone(example)).resolves.toBeDefined();
  })

  it('should return a truthy element', ()=>{
    expect(getTimeZone(example)).resolves.toBeTruthy();
  })

})
