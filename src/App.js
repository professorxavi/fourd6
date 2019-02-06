import React, { Component } from 'react';
import { Button, Popover, Menu, MenuItem, Position } from "@blueprintjs/core";
import { Header } from './components/header';
import { AbilityScores } from './components/stat-roller';
import { Class } from './components/class-survey';
import { Route } from 'react-router-dom';
import logo from './logo.png';
import './App.css';

class App extends Component {

  render() {
    const content =
      <Menu>
        <MenuItem href="/" icon="new-person" text="Roller"/>
        <MenuItem href="/class" icon="diagram-tree" text="Lvl 0"/>
        <MenuItem href="/class" icon="crown" text="DM Tools"/>
        <MenuItem href="/class" icon="grid" text="Table"/>
      </Menu>;

    return (
      <div className="app">
          <div className="bp3-dark">
            <Header />
            <div className="container">
              <Route exact path="/" component={AbilityScores} />
              <Route path="/class" component={Class} />
            </div>
            <div className="footer">
              <div className="button-div">
                <Popover content={content} position={Position.TOP}>
                    <Button id="nav-button" icon="more" />
                </Popover>
              </div>
              <img src={logo} className="logo" alt="logo" />
            </div>
          </div>
      </div>
    );
  }
}

export default App;
