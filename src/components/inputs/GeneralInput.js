import React, { Component } from 'react';


class GeneralInput extends Component {
  constructor (props){
    super(props);
    this.state = {
      validInput: 'start',
      input: ''
    }
  }
  
  onInputChange = (e) => {
    const isNumber = !isNaN(Number.parseFloat(e.target.value));
    const numValue = isNumber && Number.parseFloat(e.target.value) < 1e35 ? Number.parseFloat(e.target.value) : 0;
    const isValid = !isNaN(this.props.min) ? numValue >= this.props.min && isNumber : isNumber;
    this.props.onValueUpdate({
      name: this.props.name, 
      input: numValue,
      valid: isValid
    })
    this.setState({
      validInput: isValid,
      input: e.target.value
    });
    
  }
  onSelectorChange = (e) => {
    this.props;
  }

  render() {
    const errorMessage = !isNaN(this.props.min) && Number.parseFloat(this.state.input) < 0  ?
      <span className="validationError, col-sm-3"> Please enter a valid value, {this.props.name} cannot be negative.</span> :
    <span className="validationError, col-sm-3"> Please enter a valid number.</span>;
        
    return (
      <div className="form-group row">
        <div className="col-sm-2">
          </div>
        <label htmlFor={this.props.name} className="col-sm-3">{this.props.heading}</label>
        <div className="col-sm-3">
          <input id={this.props.name} className="form-control" 
            value={this.state.input} type="number" max={this.props.max} min={this.props.minimum}
            onChange={this.onInputChange} /> 
        </div>
        {this.props.selector} 
        {!this.state.validInput && errorMessage }
      </div>
    );
  }
}

export default GeneralInput;