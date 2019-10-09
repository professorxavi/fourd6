import React, { Component } from 'react';
import { H5 } from "@blueprintjs/core";
import SectionDetail from './section-detail.js';

class Section extends Component {
  render() {
    const section = this.props.section;
    const item = section.iterable.map((i) => {
      return <SectionDetail item={i} />;

    });
    return (
      <div>
        <H5>{section.displayName}</H5>
        <ul>
          {item}
        </ul>
      </div>
    );
  }
}

export default Section;
