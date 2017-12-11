import React, { Component } from 'react';

import AnnualReturn from './inputs/AnnualReturn';
import CurrentTaxRate from './inputs/CurrentTaxRate';
import Deposit from './inputs/Deposit';
import InflationRate from './inputs/InflationRate';
import Period from './inputs/Period';
import RetirementTaxRate from './inputs/RetirementTaxRate';


class StartingInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input:{},
      validFields: {},
      depositType: 'rrsp'
    }
  }
  onValueUpdate = (updateObj) => {
    const newValidFields = {...this.state.validFields, [updateObj.name]: updateObj.valid};
    const updatedInput = {...this.state.input, [updateObj.name]: updateObj.input};
    this.setState({
      input: updatedInput,
      validFields: newValidFields
    })
  }
  onSelectorUpdate = (depositType) => {
    this.setState({depositType})
  }

  checkFieldsInvalid = (fields) => {
    const invalidFields = Object.keys(fields).filter(fld => !this.state.validFields[fld]);
    return invalidFields.length > 0
  }

  onCalculate = () => {
    const finalInputs = {...this.state.input, depositType: this.state.depositType};
    this.props.onNewValidInputs(finalInputs);
  }

  render(){
    const inputHeaders = {
      deposit: 'deposit',
      currentTaxRate: 'currentTaxRate',
      retirementTaxRate: 'retirementTaxRate',
      annualReturn: 'annualReturn',
      inflationRate: 'inflationRate',
      period: 'period' 
    }
    const invalid = this.checkFieldsInvalid(inputHeaders);

    return(
      <div>
          <Deposit name={inputHeaders.deposit} value={this.state.input.deposit} 
            onValueUpdate={this.onValueUpdate} onSelectorUpdate={this.onSelectorUpdate} 
            depositType={this.state.depositType}/>
          <CurrentTaxRate name={inputHeaders.currentTaxRate} value={this.state.input.currentTaxRate}
            onValueUpdate={this.onValueUpdate} />  
          <RetirementTaxRate name={inputHeaders.retirementTaxRate} 
            value={this.state.input.retirementTaxRate} onValueUpdate={this.onValueUpdate} />
          <AnnualReturn name={inputHeaders.annualReturn} value={this.state.input.annualReturn} 
            onValueUpdate={this.onValueUpdate} />
          <InflationRate name={inputHeaders.inflationRate} onValueUpdate={this.onValueUpdate} 
            value={this.state.input.inflationRate} />
          <Period name={inputHeaders.period} onValueUpdate={this.onValueUpdate}
            value={this.state.input.period}/>
          <button className="btn btn-primary" disabled={invalid} onClick={e => this.onCalculate()}>Calculate</button>
      </div>
    )
  }
}

export default StartingInput;