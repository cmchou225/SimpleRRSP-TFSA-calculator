import React, { Component } from 'react';
import '../style/App.scss';
import StartingInput from './StartingInput';
import Output from './Output';
import savingsOutput from '../helpers/savingsOutput'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {},
      accounts: []
    };
  }

  onNewValidInputs = (updateObj) => {
    const outputs = this.calculate(updateObj);
    this.setState({
      input: updateObj,
      accounts: outputs
    });
  }
  
  calculate = (inputs) => {
    const rrspOutput = savingsOutput(inputs, 'rrsp');
    const tfsaOutput = savingsOutput(inputs, 'tfsa');
    return [rrspOutput, tfsaOutput];
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="/src/logo.svg" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to FinCalc TFSA Vs RRSP</h1>
        </header>
        <p className="App-intro">
        Please enter values for all fields. Rates are to be entered as percentage value (%).
        </p>
          <StartingInput onNewValidInputs={this.onNewValidInputs} /> <br />
          <Output accounts={this.state.accounts}/>
      </div>
    );
  }
}

export default App;
