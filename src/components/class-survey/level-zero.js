import React, { Component } from 'react';
import { Button, H5 } from "@blueprintjs/core";
import Intro from './intro';
import Survey from './survey';
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
    const body = this.state.start ? <Survey option={this.state.optionDisplay} onClick={this.setDisplay} /> : <Intro onClick={this.setStart} />;
    const headerText = this.state.optionDisplay.class ? 'Level 1' : 'Level 0';
    const refreshButton = this.state.optionDisplay.class ? <Button icon="refresh" minimal="true" onClick={() => this.reset()} /> : '';
    return (
      <div>
        <div className="level-area">
          <H5 id="level-zero">{headerText}</H5>
          {refreshButton}
        </div>
        {body}
      </div>
    );
  }
}

export default Class;
