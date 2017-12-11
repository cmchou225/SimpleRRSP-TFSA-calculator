import React, { Component } from 'react';
import GeneralInput from './GeneralInput';

class Period extends Component {
  render() {
    const heading = 'Investment Period: '
    return (
      <div>
        <GeneralInput min={0} heading={heading} name={this.props.name} onValueUpdate={this.props.onValueUpdate} />
      </div>
    )
  }
}
export default Period;