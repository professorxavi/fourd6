import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import { Button, Popover, Menu, MenuItem, Position } from "@blueprintjs/core";
import logo from '../../logo.png';

class Footer extends Component {
  render() {
    const content =
      <Menu>
        <MenuItem href="/" icon="new-person" text="Rolls"/>
        <MenuItem href="/class" icon="diagram-tree" text="Lvl 0"/>
      </Menu>;

    return (
      <div className="footer">
        <MediaQuery query="(max-device-width: 767px)">
          <div className="button-div">
            <Popover content={content} position={Position.TOP}>
                <Button id="nav-button" icon="more" />
            </Popover>
          </div>
        </MediaQuery>
        <img src={logo} className="logo" alt="logo" />
      </div>
    );
  }
}

export default Footer;
