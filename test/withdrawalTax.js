import chai, { expect } from 'chai';
import outputCalc from '../src/helpers/outputCalc';

describe('Withdrawal tax payable', () => {
  it('defaults NaN inputs to 0', function() {
    const notNumberInput = outputCalc.withdrawalTax('asd', 'asdf');
    
    expect(notNumberInput).to.equal(0);
  });
  
  it('returns 0 for tax payble under 1 cent', function() {
    const lessThanOneCent = outputCalc.withdrawalTax(0.000001, 1);
    
    expect(lessThanOneCent).to.equal(0);
  });
  
  it('string number inputs calculate correctly', function() {
    const stringOfNumber = outputCalc.withdrawalTax('100', '1');
    
    expect(stringOfNumber).to.equal(1);
  });
  
  it('tax payable defaults to 0 with negative future value input', function() {
    const invalidFv = outputCalc.withdrawalTax(-100, 10);
    
    expect(invalidFv).to.equal(0);
  });
  
  it('negative tax rate returns 0 - no theoretical gov refund', function() {
    const negTaxRate = outputCalc.withdrawalTax(100, -10);

    expect(negTaxRate).to.equal(0);
  });

});
