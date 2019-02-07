import React, { Component } from 'react';
import { Card, Elevation } from "@blueprintjs/core";
import Question from './Question';
import Class from './Class';

class Survey extends Component {
  render() {
    const option = this.props.option;
    const content = option.class ?
    <Class name={option.name} desc={option.text} /> :
    <Question question={option.text} options={option.options} onClick={this.props.onClick} />;
    return (
      <Card elevation={Elevation.TWO}>
        {content}
      </Card>
    );
  }
}

export default Survey;
