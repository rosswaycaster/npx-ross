require("babel-register")({});

import React, { Component } from "react";
import blessed from "blessed";
import { render } from "react-blessed";

// Rendering a simple centered box
class App extends Component {
  render() {
    return (
      <box
        top="center"
        left="center"
        width="90%"
        height="90%"
        align="right"
        border={{ type: "line" }}
        style={{ border: { fg: "blue" } }}
      >
        <text top={0} align="center" width="100%">
          Ross Waycaster
        </text>
        <line top={1} orientation="horizontal" />
        <text top={2}>More to come!</text>
      </box>
    );
  }
}

// Creating our screen
const screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  title: "Ross Waycaster = Full Stack Developer"
});

// Adding a way to quit the program
screen.key(["escape", "q", "C-c"], function(ch, key) {
  return process.exit(0);
});

// Rendering the React app using our screen
const component = render(<App />, screen);
