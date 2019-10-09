import React, { Component } from 'react';
import { Card, Elevation } from "@blueprintjs/core";
import Question from './question';
import Class from './class';

class Survey extends Component {
  render() {
    const option = this.props.option;
    const content = option.class ?
    <Class selection={option} /> :
    <Question question={option.text} options={option.options} onClick={this.props.onClick} />;
    return (
      <Card elevation={Elevation.TWO}>
        {content}
      </Card>
    );
  }
}

export default Survey;
