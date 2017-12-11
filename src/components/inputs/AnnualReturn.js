import React, { Component } from 'react';
import GeneralInput from './GeneralInput';

class AnnualReturn extends Component {
  render() {
    const heading = 'Annual Rate of Return as %: '
    return (
      <div>
        <GeneralInput heading={heading} name={this.props.name} onValueUpdate={this.props.onValueUpdate} />
      </div>
    )
  }
}

export default AnnualReturn;