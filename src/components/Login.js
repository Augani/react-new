import React, { Component } from "react";
import { Pane, Button, Heading, TextInputField, TextInput } from "evergreen-ui";
import { Box, Carousel, Image } from "grommet";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { height: props.height, loading: false };
  }

  componentWillMount() {
    this.setState({ height: window.innerHeight, width: window.innerWidth });
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

 
  
  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  login = () => {
    console.log("hhh");
  };
  render() {
    const { width } = this.state;
    const isMobile = width <= 500;

    if(isMobile){
        return (
            <Pane
              display="flex"
              justifyContent="center"
              height={this.state.height * 0.8}
              padding={16}
              margin={10}
              alignItems="center"
              background="white"
            >
              <Pane
                flexDirection="column"
                height={this.state.height * 0.7}
                background="white"
                padding={16}
              >
                <Heading marginBottom={20} size={600}>
                  Ejuma
                </Heading>
                <TextInputField
                  required
                  label="Email"
                  height={35}
                  width={300}
                  marginBottom={20}
                />
      
                <TextInputField
                  required
                  type="password"
                  label="Password"
                  height={300}
                  
                />
                <Pane justifyContent="center">
                <Button isActive={this.state.loading} onClick={this.login}>
                  Login
                </Button>
                </Pane>
      
               
              </Pane>
            </Pane>
          );
    }
    return (
      <Pane
        display="flex"
        justifyContent="center"
        height={this.state.height * 0.8}
        padding={16}
        margin={10}
        alignItems="center"
        background="white"
      >
        <Pane
          flexDirection="column"
          height={this.state.height * 0.7}
          background="white"
          padding={16}
        >
          <Heading marginBottom={20} size={600}>
            Ejuma
          </Heading>
          <TextInputField
            required
            label="Email"
            height={35}
            width={300}
            marginBottom={20}
          />

          <TextInputField
            required
            type="password"
            label="Password"
            height={300}
            
          />
          <Pane justifyContent="center">
          <Button isActive={this.state.loading} onClick={this.login}>
            Login
          </Button>
          </Pane>

         
        </Pane>
      </Pane>
    );
  }
}

export default Login;
