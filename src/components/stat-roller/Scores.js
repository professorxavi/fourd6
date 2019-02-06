import React, { Component } from 'react';
import { H5, H6 } from "@blueprintjs/core";

class Scores extends Component {
  render() {
    return (
      <div className="stats">
        <div>
          <H5 id="greeting">Happy Adventuring!</H5>
          <ul className="stat-list">
            {this.props.scores.map((s, index) => {
              return (<li key={index} className="stat">{s}</li>);
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Scores;
