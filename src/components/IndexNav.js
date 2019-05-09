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
    let nav;
    if(this.props.home){
      nav = <Button appearance="minimal" onClick={this.logout} iconBefore="logout">Logout</Button>;

    }else{
      nav = <Button appearance="minimal" is="a" href={this.props.link}  iconBefore="person">{this.props.button}</Button>;

    }
    return (
      <Pane elevation={3} display="flex" padding={16} background="tint2"  margin={20} borderRadius={3}>
      <Pane flex={1} alignItems="center" display="flex">
        <Heading size={600}>Ejuma</Heading>
      </Pane>
      <Pane>
        {/* Below you can see the marginRight property on a Button. */}
        {nav}
      </Pane>
    </Pane>
    )
  }
}

export default IndexNav
