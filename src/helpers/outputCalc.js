const checkValid = (amt) => {
  if(amt === 'Value too large')
    return 'Value too large';
  return !isNaN(amt) && amt >= 0.01 ? parseFloat(amt) : 0;
};

const calculator = {
   
  afterTaxDeposits: (deposit, currTaxRate, outputType) => {
    switch(outputType) {
      case 'tfsa':
        const aboveMinimum = checkValid(deposit) * (1 - currTaxRate/100) > 0.01;
        return aboveMinimum ? (checkValid(deposit) * (1 - currTaxRate/100)): 0;
      case 'rrsp':
        return (checkValid(deposit) / (1 - (checkValid(currTaxRate)/100)));
      default:
        return 0;
    }
  },
  fvSavings: (startDeposit, annualGrRate, period) => {
    const years = period > 0 ? period : 0; 
    const negGrowth = 1 + (annualGrRate/100) < 0;
    const multiplier = !negGrowth ? Math.pow((1 + (annualGrRate/100)), years) : -1 * Math.pow((1 + (annualGrRate/100), period))
    const fv = checkValid(checkValid(startDeposit) * multiplier); 

    return (checkValid(fv));
  },
  pvSavings: (futureValue, inflation, period) => {
    const years = period > 0 ? period : 0;
    const negInfl = 1 + (inflation/100) < 0;
    const discountingDivisor = !negInfl ? Math.pow(1 + (inflation/100), years) : -1 * Math.pow(1 + (inflation/100), period)
    return checkValid((checkValid(futureValue) / discountingDivisor));
  },
  withdrawalTax: (futureValue, retireTaxRate) => {
    return checkValid((futureValue) * (retireTaxRate/100));
  }
}

export default calculator;