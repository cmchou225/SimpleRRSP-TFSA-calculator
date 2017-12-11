import calc from './outputCalc';

const checkMax = (amt) => {
  return isNaN(amt) || amt >= 1e35 ? 'Value too large' : parseFloat(parseFloat(amt).toFixed(2));
}

export default (inputs, outputType) => {
  const afterTaxDeposit = inputs.depositType === outputType ? checkMax(inputs.deposit) : 
    checkMax(calc.afterTaxDeposits(inputs.deposit, inputs.currentTaxRate, outputType));
  const fvSavings = checkMax(calc.fvSavings(afterTaxDeposit, (inputs.annualReturn), inputs.period));
  const pvSavings = checkMax(calc.pvSavings(checkMax(fvSavings), (inputs.inflationRate), inputs.period));
  const withdrawalTax = outputType === 'rrsp' ? 
    checkMax(calc.withdrawalTax(checkMax(fvSavings), (inputs.retirementTaxRate))) 
    : 0;
  const afterTaxFv = isNaN(fvSavings) ? 'Value too large' : checkMax((fvSavings - withdrawalTax).toFixed(2));
  
  return {
    accountType: outputType, 
    afterTaxDeposit, 
    fvSavings, 
    pvSavings, 
    withdrawalTax, 
    afterTaxFv
  };
}