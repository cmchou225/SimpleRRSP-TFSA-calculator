import chai, { expect } from 'chai';
import outputCalc from '../src/helpers/outputCalc';

describe('Future value of savings before tax ', () => {
  it('defaults NaN inputs to 0', function() {
    const notNumberInput = outputCalc.fvSavings('abc','abc','abc');
    
    expect(notNumberInput).to.equal(0);
  });

  it('returns 0 for future value under 1 cent', function() {
    const lessThanOneCent = outputCalc.fvSavings(0.001, 1, 10);
    
    expect(lessThanOneCent).to.equal(0);
  });

  it('string number inputs calculate correctly', function() {
    const stringOfNumber = parseFloat((outputCalc.fvSavings(100, 10, 1).toFixed(2)));
    
    expect(stringOfNumber).to.equal(110);
  });

  it('negative deposits defaults to 0, cannot have negative future value', function() {
    const invalidDeposit = outputCalc.fvSavings(-100, 10, 10);
    
    expect(invalidDeposit).to.equal(0);
  });

  it('future value > deposit value given growth rate > 0', function() {
    const validFv = parseFloat(outputCalc.fvSavings(100, 10, 1).toFixed(2));

    expect(validFv).to.be.equal(110);
    expect(validFv).to.be.above(100);
  });

  it('future value < deposit value given growth rate < 0', function() {
    const validFv = parseFloat(outputCalc.fvSavings(100, -10, 1).toFixed(2));

    expect(validFv).to.be.equal(90);
    expect(validFv).to.be.below(100);
  });

  it('future value = deposit value given growth rate = 0', function () {
    const validFv = parseFloat(outputCalc.fvSavings(100, 0, 1).toFixed(2));

    expect(validFv).to.be.equal(100);
  });

  it('future value >= 0 even with high negative growth and long periods', function () {
    const validFv = parseFloat(outputCalc.fvSavings(1, -300, 100).toFixed(2));

    expect(validFv).to.be.equal(0);
  });
  it('future value equal to deposit value when period is negative', function () {
    const validFv = parseFloat(outputCalc.fvSavings(100, 10, -10).toFixed(2));

    expect(validFv).to.be.equal(100);
  });
});
