import React, { Component } from 'react';
import { Header } from './components/header';
import { AbilityScores } from './components/stat-roller';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="bp3-dark">
          <Header />
          <div>
            <img src={logo} className="logo" alt="logo" />
            <AbilityScores />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
