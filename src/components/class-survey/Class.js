import React, { Component } from 'react';
import { H4 } from "@blueprintjs/core";

class Class extends Component {
  render() {
    const singular = this.props.name.slice(0, this.props.name.length - 1);
    return (
      <div>
        <p className="class-title">{`You are a ${singular}`}</p>
        <img className="class-img" src={`./images/${this.props.name}.png`} alt={this.props.name} />
        <H4>
          {this.props.name}
        </H4>
        <p>
          {this.props.desc}
        </p>
      </div>
    );
  }
}

export default Class;
