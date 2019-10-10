import React, { Component } from 'react';
import Stats from './Stats';
import logo from './logo.png';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: [],
    };
    this.rollStats = this.rollStats.bind(this);
  }

  getTotal(arr) {
    let total = 0;
    for (var i = 0; i < arr.length - 1; i++) {
      total = total + arr[i];
    }
    return total;
  }

  rollDice(numDice, numSides) {
    let arr = [];
    for (var i = 0; i < numDice; i++) {
      const roll = this.rollDie(numSides);
      arr.push(roll);
    }
    arr = this.sortArr(arr);
    return arr;
  }

  rollDie(num) {
    return Math.floor((Math.random() * num) + 1);
  }

  sortArr(array) {
    array.sort((a,b) => {
      return b - a;
    });
    return array;
  }


  rollStats(num) {
    let statArray = [];
    for (var i = 0; i < num; i++) {
      const rolls = this.rollDice(4, 6);
      const statTotal = this.getTotal(rolls);
      statArray.push(statTotal);
    }
    statArray = this.sortArr(statArray);
    this.setState({stats: statArray});
  }

  render() {
    const list = this.state.stats.length > 0 ? <Stats stats={this.state.stats} /> : null;
    return (
      <div className="app">
        <div className="header">
          <img src={logo} className="logo" alt="logo" />
          <p>
            You ever just sit there wanting to roll Ability Scores
            but you don't use Roll20 enough to remember <code> /roll 4d6kh3 </code>
            let alone your login info and you just need something that rolls 4 random numbers
            between 1 and 6, keeps the highest 3 and does that 5 more times? I got you fam.
          </p>
          <button className="generate-button" onClick={() => this.rollStats(6)}>Roll for Ability Scores</button>
          {list}
        </div>
      </div>
    );
  }
}

export default App;
