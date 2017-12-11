import React, { Component } from 'react';
import GeneralInput from './GeneralInput';

class CurrentTaxRate extends Component {
  render() {
    const heading = 'Current Marginal Tax Rate as %: '
    return (
      <div>
        <GeneralInput heading={heading} name={this.props.name} onValueUpdate={this.props.onValueUpdate} />
      </div>
    )
  }
}

export default CurrentTaxRate;