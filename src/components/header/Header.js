import React from 'react';
import { Alignment, AnchorButton, Navbar } from "@blueprintjs/core";

class Header extends React.Component {
  render() {
    return (
      <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
          <AnchorButton href="/" className="bp3-minimal" icon="new-person" text="Roller"/>
          <AnchorButton href="/class" className="bp3-minimal" icon="diagram-tree" text="Lvl 0"/>
          <AnchorButton href="/class" className="bp3-minimal" icon="crown" text="DM Tools"/>
          <AnchorButton href="/class" className="bp3-minimal" icon="grid" text="Table"/>
        </Navbar.Group>
    </Navbar>
    );
  }
}

export default Header;
