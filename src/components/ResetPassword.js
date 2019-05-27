import React, { Component } from "react";
import MapContainer from "./includes/map";
import { withRouter, Redirect } from "react-router-dom";

import {
  Pane,
  Button,
  Heading,
  Table,
  Paragraph,
  Position,
  toaster,
  TextInput,
  Textarea,
  TextInputField,
  SelectField,
  FilePicker,
  SelectMenu,
  SideSheet,
  Card,
  Spinner,
  minorScale
} from "evergreen-ui";

import { RangeInput } from "grommet";
import ComponentAn from "@reactions/component";
import IndexNav from "./IndexNav";
import Sidebar from "./includes/Sidebar";
import axios from "axios";
import { MakeGetRequest, MakePostRequest } from "../functions/custom";
export class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: props.height,
      
      key: this.props.match.params.key,
      keyvalid: false,
      wrongKey: false,
      password: '',
      confirm: '',
      email: '',
      account: null
    };
  }


  changePass=()=>{
    var self = this;
    const {password, confirm, key, email} =  this.state;
    if(password !== confirm){
      toaster.warning("Passwords must match");
      return;
    }
    if(password.length < 6 || confirm.length < 6){
      toaster.warning("Password should be more than 6 characters");
      return;
    }

    var data = {
      password: password,
      key: key,
      email: email
    }
  
    self.setState({
      loading: true
    })

    MakePostRequest('auth/changePass',data).then(r=>{
      
      if(r.data.code == 201){
        toaster.success('Password has been updated successfully. You can login now with the new password');
        setTimeout(function(){
          self.setState({
            wrongKey: true,
            loading: false
          })

        }, 1000);

      }else{
        toaster.warning("Password wasn't updated. Please request for a new password reset link");
        setTimeout(function(){
          self.setState({
            wrongKey: true,
            loading: false
          })

        }, 1000);

      }


    }).catch(e=>{

    })

  }

  changeInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  verifyKey() {
    var self = this;
    MakeGetRequest("auth/verifyResetKey/" + this.state.key)
      .then(r => {
        console.log(r);
        if (r.data.code == 201) {
          self.setState({
            keyvalid: true,
            email: r.data.data.email,
           
          });
        }else{
          self.setState({
            keyvalid: false,
            wrongKey: true
          });

        }
      })
      .catch(e => {});
  }
  componentDidMount(){
    this.verifyKey();
  }

  getData = () => {
    var self = this;
    axios
      .get("https://api.myjson.com/bins/6lgoa")
      .then(function(res) {
        self.setState({
          postedJobs: res.data
        });
        console.log(self.state.postedJobs);
      })
      .catch(err => {});
  };

  Reset = () => {
    var self = this;
    if (!this.state.email) {
      toaster.warning("Please provide a valid email");
    } else {
      self.setState({
        loading: true
      });
      var d = {
        email: self.state.email
      };
      MakePostRequest("auth/requestPass/", d).then(r => {
        if (r.data.code != 201) {
          toaster.danger(
            // `A user with email, ${this.state.email} cannot be found`
            r.data.message
          );
          self.setState({
            loading: false
          });
        } else {
          toaster.success(
            "An email with a link to reset your password has been sent"
          );
          self.setState({
            loading: false
          });
        }
      });
    }
  };

  componentWillMount() {
    this.setState({ height: window.innerHeight, width: window.innerWidth });
  }
  render() {
    if (this.state.key && this.state.wrongKey) {
      return <Redirect to="/login" />;
    }
    if (this.state.key && !this.state.keyvalid) {
      return (
        <Pane
          display="flex"
          alignItems="center"
          justifyContent="center"
          height={this.state.height}
        >
          <Spinner />
        </Pane>
      );
    }
    if (this.state.keyvalid) {
      return (
        <Pane height={this.state.height * 0.9}>
          <IndexNav button="Signup" link="/signup" />
          <Pane width={this.state.width} justifyContent="center" display="flex">
            {" "}
            <Heading size={700}>Create a new password</Heading>
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
                label="New password"
                height={35}
                width={300}
                type="password"
                marginBottom={20}
                name="password"
                onChange={this.changeInput}
              />
              <TextInputField
                required
                label="Confirm new password"
                height={35}
                type="password"
                width={300}
                marginBottom={20}
                name="confirm"
                onChange={this.changeInput}
              />

              <Pane
                justifyContent="center"
                flexDirection="column"
                marginTop="20"
                display="flex"
              >
                <Button
                  isLoading={this.state.loading}
                  onClick={this.changePass}
                >
                  Change Password
                </Button>
                {this.state.showB ? (
                  <Button
                    appearance="minimal"
                    marginTop={20}
                    intent="success"
                    is="a"
                    href="/login"
                  >
                    Login
                  </Button>
                ) : (
                  ""
                )}
              </Pane>
            </Pane>
          </Pane>
        </Pane>
      );
    }
    if (!this.state.key && !this.state.key) {
      return (
        <Pane height={this.state.height * 0.9}>
          <IndexNav button="Signup" link="/signup" />
          <Pane width={this.state.width} justifyContent="center" display="flex">
            {" "}
            <Heading size={700}>Reset your password</Heading>
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

              <Pane
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                marginTop="20"
                display="flex"
              >
                <Button isLoading={this.state.loading} onClick={this.Reset}>
                  Send password reset link
                </Button>
                <Button
                  appearance="primary"
                  marginTop={20}
                  is="a"
                  href="/login"
                >
                  Login
                </Button>
              </Pane>
            </Pane>
          </Pane>
        </Pane>
      );
    }
  }
}

export default ResetPassword;
