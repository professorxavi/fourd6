import React, { Component } from 'react';
import { H5 } from "@blueprintjs/core";
import Intro from './Intro';
import Survey from './Survey';
import options from './decisions.json';

class Class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: false,
      options: options,
      optionDisplay: options[1]
    };
    this.setStart = this.setStart.bind(this);
    this.reset = this.reset.bind(this);
    this.setDisplay = this.setDisplay.bind(this);
  }

  setStart() {
    this.setState({start: true});
  }

  reset() {
    console.log('do a thing');
    this.setState({
      start: false,
      optionDisplay: options[1]
    });
  }

  setDisplay(selection) {
    this.setState({optionDisplay: options[selection]});
  }

  render() {
    const body = this.state.start ? <Survey option={this.state.optionDisplay} reset={this.reset} onClick={this.setDisplay} /> : <Intro onClick={this.setStart} />;
    const headerText = this.state.optionDisplay.class ? 'Level 1' : 'Level 0';
    return (
      <div>
        <H5 id="level-zero">{headerText}</H5>
        {body}
      </div>
    );
  }
}

export default Class;
