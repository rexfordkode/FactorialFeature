var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    
    it('returns 120 when 5 is passed',() =>{
      const expected = 120;
      const input = 5
     const result = Calculate.factorial(input);
      assert.equal(result, expected);
    });
    it('returns 6 when 3 is passed', ()=> {
      const expected = 6
      const input = 3 
      const result = Calculate.factorial(input);
      assert.equal(expected, result);
    }) 

     it('returns 1 when 0 is passed (edge case)', ()=> {
      const expected = 1
      const input = 0 
      const result = Calculate.factorial(input);
      assert.equal(expected, result);
    }) 

  });
});