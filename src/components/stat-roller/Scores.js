import React, { Component } from 'react';
import './Scores.css';

class Scores extends Component {
  render() {
    return (
      <div className="stats">
        <p className="greeting">Happy Adventuring!</p>
        <ul className="stat-list">
          {this.props.scores.map((s, index) => {
            return (<li key={index} className="stat">{s}</li>);
          })}
        </ul>
      </div>
    );
  }
}

export default Scores;
