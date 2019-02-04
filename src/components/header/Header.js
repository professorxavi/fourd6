import React from 'react';
import { Alignment, Button, Navbar } from "@blueprintjs/core";

class Header extends React.Component {
  render() {
    return (
      <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading>Fourd6</Navbar.Heading>
            <Navbar.Divider />
            <Button className="bp3-minimal" icon="home" text="Home" />
            <Button className="bp3-minimal" icon="document" text="Files" />
        </Navbar.Group>
    </Navbar>
    );
  }
}

export default Header;
