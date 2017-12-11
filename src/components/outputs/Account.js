import React, { Component } from 'react';

const Account = ({account}) => {
  const rrspDesc = `RRSP saving accounts allow for taxes to be deferred until after retirement. Deposits are made before income tax is deducted. 
                    Taxes are deducted when withdrawals are made based on retirement tax rate.`
  const tfsaDesc = `TFSA savings accounts allow for deposits to be invested tax free. Deposits are made after income taxes are deducted.
                    No taxes will be deducted when making a withdrawal.`
  const depNote = account.accountType === 'rrsp' && ` (tax refunds reinvested in RRSP)` 
  const withCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
  <div className="col-sm-6" >
    <div className="card">
      <div className="card-block">
        <h3 className="card-title">{account.accountType.toUpperCase()}</h3>
        <p className="card-text">{account.accountType === 'rrsp' ? rrspDesc : tfsaDesc}</p>
      </div>
      <ul className="list-group, list-group-flush">
        <li className="list-group-item">After-Tax deposit{depNote}: ${withCommas(account.afterTaxDeposit)}</li>
        <li className="list-group-item">Ending savings balance (before taxes) in present value: ${withCommas(account.pvSavings)} </li>
        <li className="list-group-item">Ending savings balance (before taxes) in future value: ${withCommas(account.fvSavings)} </li>
        <li className="list-group-item">Tax payable upon withdrawal: ${withCommas(account.withdrawalTax)}</li>
        <li className="list-group-item">Ending savings account balance (after-tax): ${withCommas(account.afterTaxFv)} </li>
      </ul>
    </div>
  </div>
  
  )
}
export default Account;
