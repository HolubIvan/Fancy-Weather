import {translateEngToBel, translateRusToBel} from './translation';

describe('translateEngToBel', ()=>{
  
  expect.assertions(1);

  it('should return an object', () =>{
    return expect(translateEngToBel('humidity')).resolves.toBeDefined();
  })

  it('should return an element that has Belorussian translation', () =>{
    return expect(translateEngToBel('humidity')).resolves.toEqual('вільготнасць');
  })
})


describe('translateRusToBel', ()=>{

  expect.assertions(1);

  it('should return an object', () =>{
    return expect(translateEngToBel('humidity')).resolves.toBeDefined();
  })

  it('should return an element that has Belorussian translation', () =>{
    return expect(translateRusToBel('влажность')).resolves.toEqual('вільготнасць');
  })
})
