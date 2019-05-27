import React, { Component } from "react";
import {
  Pane,
  Button,
  Heading,
  TextInputField,
  TextInput,
  toaster,
  Popover,
  Dialog
} from "evergreen-ui";
import * as LoginAction from '../actions/authActions';
import { allActions } from '../actions/index'
import IndexNav from "./IndexNav";
import { Box, Carousel, Image } from "grommet";
import "react-intl-tel-input/dist/main.css";
import { withRouter, Redirect } from "react-router-dom";
import ComponentAn from "@reactions/component";
import { connect } from "react-redux";
import axios from "axios";
import IntlTelInput from "react-intl-tel-input";
// import 'react-phone-number-input/rrui.css'
import Phone, {
  formatPhoneNumber,
  formatPhoneNumberIntl,
  isValidPhoneNumber
} from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { MakeGetRequest, MakePostRequest } from "../functions/custom";

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: props.height,
      loading: false,
      dialogLoading: false,
      phone: "",
      password: "",
      email: "",
      code: "",
      showNumberConfirm: false,
      isLoading: false,
      verifyNumberConfirm: false,
      codeVerify: "",
      verifyLoading: false,
      loggedIn: false
    };
  }

  // componentDidUpdate(prevProps) {
  //   // Typical usage (don't forget to compare props):
  //   if (this.props.auth.loggedIn !== prevProps.auth.loggedIn) {
  //     console.log('hi');
  //     var f = this.props.auth.loggedIn
  //     this.setState({loggedIn: f})
  //   }
  // }

  log=()=>{
    this.setState({
      loggedIn: this.props.auth.loggedIn
    })
  }

  validateForm = () => {
    var self = this;
    const { password, email } = this.state;
    if (!password || !email) {
      toaster.warning("All fields are required");
      return;
    }
    var data = {
      email: self.state.email,
      password: self.state.password
    };

    MakePostRequest("auth/login", data)
      .then(res => {
        if (!res.data.data) {
          toaster.danger("Login failed", {
            description: "Email or password is incorrect"
          });
          self.setState({
            loading: false
          });
          return;
        }

        toaster.success("Logged in successfully");
        if (!res.data.data.phoneVerified) {
          self.setState({
            loading: false,
            showNumberConfirm: true
          });
        } else {
          this.props.loginUser(true, res.data.token);
          this.props.updateuser(res.data.data);
          this.props.updateToken(res.data.token);
          self.setState({
            loading: false
          });
          self.log();
          
        }
      })
      .catch(er => {
        console.log(er);
        self.setState({
          loading: false
        });
      });
  };

  SendCode = () => {
    var data = {
      phone: this.state.phone,
      cc: this.state.code
    };
    MakePostRequest("auth/phone", data)
      .then(res => {
        if (res.data.code == 201) {
          this.setState({
            showNumberConfirm: false,
            verifyNumberConfirm: true
          });
          toaster.success(`Code succesfully sent to ${this.state.phone}`);
        } else {
          this.setState({
            showNumberConfirm: false
          });
          toaster.warning(
            "An error occurred while sending code, please try again"
          );
        }
      })
      .catch(e => {});
  };

  verifyCode = () => {
    var data = {
      phone: this.state.phone,
      cc: this.state.code,
      code: this.state.codeVerify
    };
    MakePostRequest("auth/phoneVerification", data)
      .then(res => {
        if (res.data.code == 201) {
          this.setState({
            verifyNumberConfirm: false
          });
          toaster.success(`Phone number successfully verified`);
        } else {
          this.setState({
            verifyNumberConfirm: false
          });
          toaster.warning("Wrong code, please try again");
        }
      })
      .catch(e => {
        this.setState({
          verifyNumberConfirm: false
        });
        toaster.warning("Error, please try again");
      });
  };

  changeInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  changePhone = (event, d, code, j) => {
    console.log(event, d, code.dialCode);
    this.setState({
      code: code.dialCode,
      phone: d
    });
  };

  componentWillMount() {
    this.setState({ height: window.innerHeight, width: window.innerWidth });
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  login = () => {
    this.setState({
      loading: true
    });
    this.validateForm();
  };
  render() {
    const {
      width,
      showNumberConfirm,
      dialogLoading,
      verifyNumberConfirm,
      phone,
      verifyLoading
    } = this.state;
    const isMobile = width <= 500;

    if(this.state.loggedIn){
      return <Redirect to="/home"/>
      
    }

    return (
      <Pane height={this.state.height * 0.9}>
        <IndexNav button="Signup" link="/signup" />
        <Pane width={this.state.width} justifyContent="center" display="flex">
          {" "}
          <Heading size={700}>Welcome back</Heading>
        </Pane>

        <Pane
          display="flex"
          justifyContent="center"
          height={this.state.height * 0.7}
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
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <TextInputField
              required
              label="Email"
              height={35}
              width={300}
              marginBottom={20}
              name="email"
              onChange={this.changeInput}
            />

            <TextInputField
              required
              type="password"
              label="Password"
              height={35}
              onChange={this.changeInput}
              name="password"
              width={300}
            />

            <Pane
              justifyContent="center"
              flexDirection="column"
              marginTop="20"
              display="flex"
            >
              <Button isLoading={this.state.loading} onClick={this.login}>
                Login
              </Button>
              <Button
                appearance="minimal"
                marginTop={20}
                intent="warning"
                is="a"
                href="/reset"
              >
                Reset password
              </Button>
            </Pane>

            <ComponentAn isShown={showNumberConfirm}>
              {({ state, setState }) => (
                <Pane>
                  <Dialog
                    isShown={showNumberConfirm}
                    title="Verify phone number"
                    onCloseComplete={() => setState({ isShown: false })}
                    isConfirmLoading={this.state.isLoading}
                    onConfirm={this.SendCode}
                    confirmLabel={dialogLoading ? "Sending code" : "Send code"}
                  >
                    {/* <Phone
                      placeholder="Enter phone number"
                      value={this.state.phone}
                      country="US"
                      onChange={phone => this.setState({ phone })}
                    /> */}
                    <IntlTelInput
                      preferredCountries={["tw"]}
                      containerClassName="intl-tel-input"
                      inputClassName="form-control"
                      onPhoneNumberChange={this.changePhone}
                    />
                  </Dialog>
                </Pane>
              )}
            </ComponentAn>
            <ComponentAn isShown={verifyNumberConfirm}>
              {({ state, setState }) => (
                <Pane>
                  <Dialog
                    isShown={verifyNumberConfirm}
                    title="Confirm code"
                    onCloseComplete={() => setState({ isShown: false })}
                    isConfirmLoading={this.state.isLoading}
                    onConfirm={this.verifyCode}
                    confirmLabel={verifyLoading ? "Verifying" : "Verify Code"}
                  >
                    <TextInputField
                      type="password"
                      label="Enter Code sent to "
                      height={35}
                      onChange={this.changeInput}
                      name="codeVerify"
                      width={300}
                    />
                  </Dialog>
                </Pane>
              )}
            </ComponentAn>
          </Pane>
        </Pane>
      </Pane>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (auth, token) => dispatch(allActions.authActions.Login(auth, token)),
    updateuser: user => dispatch(allActions.userActions.updateuser(user)),
    updateToken: token => dispatch(allActions.authActions.updatetoken(token))
  }
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Login));
