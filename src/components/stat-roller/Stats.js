import React from 'react';
import './Stats.css';

class Stats extends React.Component {
  render() {
    return (
      <div className="stats">
        <p className="greeting">Happy Adventuring!</p>
        <ul className="stat-list">
          {this.props.stats.map((s, index) => {
            return (<li key={index} className="stat">{s}</li>);
          })}
        </ul>
      </div>
    );
  }
}

export default Stats;
