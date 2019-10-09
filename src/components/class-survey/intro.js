import React, { Component } from 'react';
import { Button, Card, Elevation, H6 } from "@blueprintjs/core";

class Intro extends Component {
  render() {
    return (
      <Card elevation={Elevation.TWO}>
        <h3>So many options! Wut do?</h3>
        <H6>
          {`If you're a new player, D&D can be overwhelming. You have a billion
            possibilities for background, race, and favorite drink when it's 97° outside.`}
        </H6>
        <H6>
          {`Let's try to make this a little easier. We'll start out at level 0, by the end of
            this you'll gain your first level and a class. Sound good?`}
        </H6>
        <Button intent="warning" onClick={() => this.props.onClick()}>{`Yeah, let's lfg!`}</Button>
      </Card>
    );
  }
}

export default Intro;
