import React, { Component } from 'react';
import { Button, Radio, RadioGroup } from "@blueprintjs/core";

class Survey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: ''
    };
    this.setChoice = this.setChoice.bind(this);
  }

  setChoice(event) {
   this.setState({selection: event.currentTarget.value});
  }


  render() {
    const options = this.props.options.map(o => {
     return <Radio key={o.value} label={o.text} value={o.value} />;
    });

    return (
      <div>
        <RadioGroup
          label={this.props.question}
          selectedValue={this.state.selection}
          onChange={this.setChoice}
        >
          {options}
        </RadioGroup>
        <Button disabled={this.state.selection.length < 1} intent="warning" onClick={() => this.props.onClick(this.state.selection)}>Continue</Button>
      </div>
    );
  }
}

export default Survey;
