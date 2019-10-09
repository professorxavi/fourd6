import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import { Alignment, AnchorButton, Navbar } from "@blueprintjs/core";

class Header extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>fourd6</Navbar.Heading>
          <MediaQuery query="(min-device-width: 768px)">
            <Navbar.Divider />
            <AnchorButton href="/" className="bp3-minimal" icon="new-person" text="Rolls"/>
            <AnchorButton href="/class" className="bp3-minimal" icon="diagram-tree" text="Lvl 0"/>
          </MediaQuery>
        </Navbar.Group>
    </Navbar>
    );
  }
}

export default Header;
