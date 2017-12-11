import React, { Component } from 'react';
import GeneralInput from './GeneralInput';

class InflationRate extends Component {
  render() {
    const heading = 'Inflation Rate as %: '
    return (
      <div>
        <GeneralInput heading={heading} name={this.props.name} onValueUpdate={this.props.onValueUpdate} />
      </div>
    )
  }
}
export default InflationRate;