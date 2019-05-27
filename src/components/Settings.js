import React, { Component } from "react";
import MapContainer from "./includes/map";
import {
  Pane,
  Button,
  Heading,
  Table,
  Paragraph,
  Position,
  TextInput,
  Textarea,
  TextInputField,
  SelectField,
  FilePicker,
  SelectMenu,
  SideSheet,
  Card,
  minorScale
} from "evergreen-ui";

import { RangeInput } from "grommet";
import ComponentAn from "@reactions/component";
import IndexNav from "./IndexNav";
import Sidebar from "./includes/Sidebar";
import axios from "axios";
import NewHome from "./newHome";
import  { Redirect, withRouter } from 'react-router-dom';
import { connect } from "react-redux";




export class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: props.height,
      postedJobs: [],
      appliedJobs: [],
      isShown: false,
      jobBudget: 0,
      jobTitle: "",
      jobDescription: "",
      jobUrgency: "",
      jobCategory: "",
      jobMedia: []
    };
  }

  changeInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

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

  componentWillMount() {
    this.setState({ height: window.innerHeight, width: window.innerWidth });
    this.getData();
  }
  render() {
    const {height, width} = this.state;
    return (
      <Pane display="flex" flexDirection="row" height={height} width={width}>
      <Pane flexDirection="column" display="flex" width={width*0.1} height={height}>
      <Sidebar />

      </Pane>
      <Pane elevation={1} flexDirection="column" display="flex" width={width*0.9} height={height}>
      <IndexNav />
      <Pane height={height * 0.8} width="100%" display="flex" flexDirection="row" padding={10}>
      <Pane height="100%" width="45%" display="flex" flexDirection="column">


        </Pane>
        <Pane height="100%" width="45%" display="flex" flexDirection="column">


        </Pane>

      </Pane>

      </Pane>

      </Pane>
    )
  }
}

export default Settings;
