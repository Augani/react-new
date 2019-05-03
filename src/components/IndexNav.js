import React, { Component } from 'react'
import { Pane, Text, Button, Heading } from 'evergreen-ui'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export class IndexNav extends Component {
  constructor(props) {
    super(props);
    this.state = {height: props.height};
  }

  componentWillMount(){
    this.setState({height: window.innerHeight + 'px', width: window.innerWidth});
  }

  render() {
    return (
      <Pane elevation={3} display="flex" padding={16} background="tint2"  margin={20} borderRadius={3}>
      <Pane flex={1} alignItems="center" display="flex">
        <Heading size={600}>Ejuma</Heading>
      </Pane>
      <Pane>
        {/* Below you can see the marginRight property on a Button. */}
        <Button appearance="primary"  iconBefore="person"><Link to={this.props.link}>{this.props.button}</Link></Button>
      </Pane>
    </Pane>
    )
  }
}

export default IndexNav
