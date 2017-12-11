import React, { Component } from 'react';
import GeneralInput from './GeneralInput';

class RetirementTaxRate extends Component {
  render() {
    const heading = 'Retirement Average Tax Rate as %: '
    return (
      <div>
        <GeneralInput heading={heading} name={this.props.name} onValueUpdate={this.props.onValueUpdate} />
      </div>
    )
  }
}

export default RetirementTaxRate;