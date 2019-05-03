import React, { Component, useState, useEffect } from "react";
import { Pane, Text } from 'evergreen-ui'


class App extends Component {
  state = {
    showSidebar: false
  };
  render() {
    const { showSidebar } = this.state;
    return (
      <Pane clearfix>
      <Pane
        elevation={0}
        float="left"
        backgroundColor="white"
        width={200}
        height={120}
        margin={24}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Text>Elevation 0</Text>
        <Text size={300}>Flat Panes</Text>
      </Pane>
      <Pane
        elevation={1}
        float="left"
        width={200}
        height={120}
        margin={24}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Text>Elevation 1</Text>
        <Text size={300}>Floating Panes</Text>
      </Pane>
      <Pane
        elevation={2}
        float="left"
        width={200}
        height={120}
        margin={24}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Text>Elevation 2</Text>
        <Text size={300}>Popovers and Dropdowns</Text>
      </Pane>
      <Pane
        elevation={3}
        float="left"
        width={200}
        height={120}
        margin={24}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Text>Elevation 3</Text>
        <Text size={300}>Toasts</Text>
      </Pane>
      <Pane
        elevation={4}
        float="left"
        width={200}
        height={120}
        margin={24}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Text>Elevation 4</Text>
        <Text size={300}>Dialog</Text>
      </Pane>
    </Pane>
    );
  }
}

export default App;
