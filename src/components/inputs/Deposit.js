import React, { Component } from 'react';
import GeneralInput from './GeneralInput';

class Deposit extends Component {

  onChange = (e) => {
    this.props.onSelectorUpdate(e.target.value);
  }

  render() {
    const depositSelector = this.props.name === 'deposit' && 
    <div>
      <select value={this.props.depositType} onChange={this.onChange}>
        <option value="rrsp" > RRSP</option>
        <option value="tfsa" > TFSA</option>
      </select>
    </div>;
    const heading = 'Deposit Amount: '
    return (
      <div>
        <GeneralInput selector={depositSelector} min={0} heading={heading} name={this.props.name} onValueUpdate={this.props.onValueUpdate} />
      </div>
    )
  }
}
export default Deposit;