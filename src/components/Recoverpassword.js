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


export class Recoverpassword extends Component {
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
    return (
      <div>
        
      </div>
    )
  }
}

export default Recoverpassword
