import React, { Component } from 'react'
import { Pane, Text, Button, Heading } from 'evergreen-ui'

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
        <Button appearance="primary" is="a" href={this.props.link} iconBefore="person">{this.props.button}</Button>
      </Pane>
    </Pane>
    )
  }
}

export default IndexNav
