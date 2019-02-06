import React from 'react';
import { Button, Popover, Menu, MenuItem, Position } from "@blueprintjs/core";
import logo from '../../logo.png';

class Footer extends React.Component {
  render() {
    const content =
      <Menu>
        <MenuItem href="/" icon="new-person" text="Roller"/>
        <MenuItem href="/class" icon="diagram-tree" text="Lvl 0"/>
        <MenuItem href="/class" icon="crown" text="DM Tools"/>
        <MenuItem href="/class" icon="grid" text="Table"/>
      </Menu>;
    return (
      <div className="footer">
        <div className="button-div">
          <Popover content={content} position={Position.TOP}>
              <Button id="nav-button" icon="more" />
          </Popover>
        </div>
        <img src={logo} className="logo" alt="logo" />
      </div>
    );
  }
}

export default Footer;
