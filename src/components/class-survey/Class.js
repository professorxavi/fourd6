import React, { Component } from 'react';
import { H4 } from "@blueprintjs/core";
import Section from './section';

class Class extends Component {
  render() {
    const selection = this.props.selection;
    const singular = selection.name.slice(0, selection.name.length - 1);
    const section = selection.sections.map((s) => {
      return <Section section={s} />;
    });
    return (
      <div>
        <p className="class-title">{`You are a ${singular}`}</p>
        <img className="class-img" src={`./images/${selection.name}.png`} alt={selection.name} />
        <H4>
          {selection.name}
        </H4>
        <p>
          {selection.text}
        </p>
        {section}
      </div>
    );
  }
}

export default Class;
