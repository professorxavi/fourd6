import React, { Component } from 'react';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { AbilityScores } from './components/stat-roller';
import { Class } from './components/class-survey';
import { Route } from 'react-router-dom';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="app">
          <div className="bp3-dark">
            <Header />
            <div className="container">
              <Route exact path="/" component={AbilityScores} />
              <Route path="/class" component={Class} />
            </div>
            <Footer />
          </div>
      </div>
    );
  }
}

export default App;
