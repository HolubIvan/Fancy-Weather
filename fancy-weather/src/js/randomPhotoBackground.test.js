import {getRandomBackground} from './randomPhotoBackground';

describe('getRandomBackground', ()=>{
  expect.assertions(1);
  it('should return an url of photo', ()=>{
    expect(getRandomBackground()).toBeDefined();
  })
})