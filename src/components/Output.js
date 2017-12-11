import React, { Component } from 'react';
import Account from './outputs/Account';

class Output extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const accountTypes = this.props.accounts.map(account => {
      return <Account key={account.accountType} account={account}/>
    })
    return (
      <div className="row">
        {accountTypes}
      </div>
    )
  }
}

export default Output;