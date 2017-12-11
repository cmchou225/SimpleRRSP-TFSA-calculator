import chai, { expect } from 'chai';
import outputCalc from '../src/helpers/outputCalc';

describe('Present value of savings before tax ', () => {

  it('defaults NaN inputs to 0', function() {
    const notNumberInput = outputCalc.pvSavings('abc','abc','abc');
    
    expect(notNumberInput).to.equal(0);
  });

  it('returns 0 for present value under 1 cent', function() {
    const lessThanOneCent = outputCalc.pvSavings(0.001, 1, 10);
    
    expect(lessThanOneCent).to.equal(0);
  });

  it('string number inputs calculate correctly', function() {
    const stringOfNumber = parseFloat((outputCalc.pvSavings(100, 10, 1).toFixed(2)));
    
    expect(stringOfNumber).to.equal(90.91);
  });

  it('negative future value input defaults to 0, cannot have negative present value', function() {
    const invalidFV = outputCalc.pvSavings(-100, 10, 10);
    
    expect(invalidFV).to.equal(0);
  });

  it('future value > present value given inflation rate > 0', function() {
    const validPv = parseFloat(outputCalc.pvSavings(100, 10, 1).toFixed(2));

    expect(validPv).to.be.equal(90.91);
    expect(validPv).to.be.below(100);
  });

  it('future value < present value given inflation rate < 0', function() {
    const validPv = parseFloat(outputCalc.pvSavings(100, -10, 1).toFixed(2));

    expect(validPv).to.be.equal(111.11);
    expect(validPv).to.be.above(100);
  });

  it('future value = present value given inflation rate = 0', function () {
    const validPv = parseFloat(outputCalc.pvSavings(100, 0, 4).toFixed(2));

    expect(validPv).to.be.equal(100);
  });

  it('present value >= 0 even with high negative inflation and long periods', function () {
    const validPv = parseFloat(outputCalc.pvSavings(1, -300, 100).toFixed(2));

    expect(validPv).to.be.equal(0);
  });

  it('future value equal to present value when period is negative', function () {
    const validPv = parseFloat(outputCalc.pvSavings(100, 10, -10).toFixed(2));

    expect(validPv).to.be.equal(100);
  });
});