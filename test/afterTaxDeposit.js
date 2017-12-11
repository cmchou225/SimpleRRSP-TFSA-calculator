import chai, { expect} from 'chai';
import outputCalc from'../src/helpers/outputCalc';

describe('after tax deposits', () => {
  it('defaults NaN inputs to 0', function() {
    const notNumberInput = outputCalc.afterTaxDeposits('asd', 'asdf', 'rrsp');
    
    expect(notNumberInput).to.equal(0);
  });
  it('returns 0 for deposits under 1 cent', function() {
    const lessThanOneCent = outputCalc.afterTaxDeposits(0.000001, 1, 'rrsp');
    
    expect(lessThanOneCent).to.equal(0);
  });
  it('invalid account types returns defaults to 0', function() {
    const invalidAccountType = outputCalc.afterTaxDeposits(100, 1, 'test');
    
    expect(invalidAccountType).to.equal(0);
  });
  it('string number inputs calculate correctly', function() {
    const stringOfNumber = outputCalc.afterTaxDeposits('100', '1', 'tfsa');
    
    expect(stringOfNumber).to.equal(99);
  });
  it('given current tax rate > 0%, rrsp after tax deposit > tfsa', function() {
    const validRrspInput = outputCalc.afterTaxDeposits(100, 30, 'rrsp');
    const validTfsaInput = outputCalc.afterTaxDeposits(100, 30, 'tfsa');

    expect(validRrspInput).to.be.above(validTfsaInput);
  });
  it('given current tax rate = 0%, rrsp after tax deposit = tfsa', function() {
    const validRrspInput = outputCalc.afterTaxDeposits(100, 0, 'rrsp');
    const validTfsaInput = outputCalc.afterTaxDeposits(100, 0, 'tfsa');

    expect(validRrspInput).to.equal(validTfsaInput);
  });
  it('given current tax rate < 0%, rrsp after tax deposit < tfsa', function() {
    const validRrspInput = outputCalc.afterTaxDeposits(100, -10, 'rrsp');
    const validTfsaInput = outputCalc.afterTaxDeposits(100, -10, 'tfsa');

    expect(validRrspInput).to.be.below(validTfsaInput);
  });
  it('given a tfsa deposit of 100, tax of 50%, rrsp after tax equivalent should be 200', function() {
    const validRrspInput = outputCalc.afterTaxDeposits(100, 50, 'rrsp');

    expect(validRrspInput).to.equal(200);
  })
  it('given an rrsp deposit of 100, tax of 50%, tfsa after tax equivalent should be 50', function() {
    const validTfsaInput = outputCalc.afterTaxDeposits(100, 50, 'tfsa');

    expect(validTfsaInput).to.equal(50);
  })  
});
