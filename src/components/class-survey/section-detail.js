import React, { Component } from 'react';
import { ListItem } from '../common';

class SectionDetail extends Component {
  render() {
    const item = this.props.item;
    const displayText = typeof item === 'string' ?
      item :
      `${item.name} : ${item.description} (${item.source})`;

    return (
      <ListItem text={displayText} />
    );
  }
}

export default SectionDetail;
