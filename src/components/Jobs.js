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
  Text,
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



 class Page extends Component {
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

  postJob=()=>{

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
    const { width, postedJobs, isShown } = this.state;
    const isMobile = width <= 500;
    if (isMobile) {
      return (
        <Pane display="flex" flex={1} flexDirection="column">
          <Pane height="90%" width="100%" justifyContent="center" alignItems="center">

          </Pane>
          <Pane
            elevation={1}
            display="flex"
            height="10%"
            width="100%"
            flexDirection="column"
            padding={16}
            background="white"
            margin={10}
            justifyContent="center"
            alignItems="center"
            borderRadius={3}
          >
           {/* <Button appearance="primary">
            Post a new job
           </Button> */}

<ComponentAn initialState={{ isShown: false }}>
                {({ state, setState }) => (
                  <React.Fragment>
                    <SideSheet
                      isShown={state.isShown}
                      onCloseComplete={() => setState({ isShown: false })}
                      containerProps={{
                        display: "flex",
                        flex: "1",
                        flexDirection: "column"
                      }}
                    >
                      <Pane
                        zIndex={1}
                        flexShrink={0}
                        elevation={0}
                        backgroundColor="white"
                      >
                        <Pane padding={16}>
                          <Heading size={300}>Post a job</Heading>
                        </Pane>
                      </Pane>
                      <Pane
                        flex="1"
                        overflowY="scroll"
                        background="tint1"
                        padding={16}
                      >
                        <Card
                          backgroundColor="white"
                          elevation={0}
                          height="100%"
                          width="60%"
                          display="flex"
                          flexDirection="column"
                          alignItems="center"
                          justifyContent="center"
                        >
                          {/* content start */}

                          <Pane
                            display="flex"
                            flexDirection="row"
                            justifyContent="center"
                            alignItems="center"
                            padding={10}
                            width="100%"
                          >
                            <TextInput
                              placeholder="Job Title"
                              onChange={this.changeInput}
                              name="jobTitle"
                              value={this.state.jobTitle}
                              width="90%"
                            />
                          </Pane>
                          <Pane
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            padding={10}
                            width="100%"
                          >
                            <Textarea
                              placeholder="Job Description"
                              name="jobDescription"
                              onChange={this.changeInput}
                              value={this.state.jobDescription}
                              width="90%"
                            />
                          </Pane>
                          <Pane
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            padding={10}
                            flexDirection="column"
                            width="100%"
                          >
                            <Text>Job Budget slider</Text>
                            <RangeInput
                              value={this.state.jobBudget}
                              color="light"
                              name="jobBudget"
                              max={1000}
                              width="70%"
                              onChange={this.changeInput}
                            />
                            <Text>${this.state.jobBudget}</Text>

                          </Pane>
                          <Pane
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            padding={10}
                            width="100%"
                          >
                            <ComponentAn initialState={{ selected: null }}>
                              {({ setState, state }) => (
                                <SelectMenu
                                  title="Select a job category"
                                  options={[
                                    "Education & Internships",
                                    "Customer Service & Call Center",
                                    "Office work & administration",
                                    "Transport, logistics & traffic",
                                    "Gardening & Farming",
                                    "Purchasing & Sales",
                                    "Social Sector & Care",
                                    "Gastronomy & Tourism",
                                    "Construction, Craft & Production"
                                  ].map(label => ({ label, value: label }))}
                                  selected={state.selected}
                                  onSelect={item =>
                                    setState({ selected: item.value })
                                  }
                                >
                                  <Button
                                    name="jobCategory"
                                    onChange={this.changeInput}
                                  >
                                    {state.selected || "Choose a job category"}
                                  </Button>
                                </SelectMenu>
                              )}
                            </ComponentAn>
                          </Pane>

                          <Pane
                            display="flex"
                            justifyContent="space-around"
                           
                            padding={10}
                            width="60%"
                          >
                            <FilePicker
                              multiple
                              width="70%"
                              marginBottom={32}
                              onChange={files => console.log(files)}
                            />
                          </Pane>
                          <Pane
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            padding={10}
                            width="60%"
                          >
                           <Button onClick={this.postJob}>
                             Post
                           </Button>
                          </Pane>

                          {/* content end */}
                        </Card>
                      </Pane>
                    </SideSheet>
                    <Button
                      appearance="primary"
                      onClick={() => setState({ isShown: true })}
                    >
                      Post a new job
                    </Button>
                  </React.Fragment>
                )}
              </ComponentAn>
             
          
          </Pane>
        </Pane>
      );
    }
    if (this.props.data.auth.loggedIn) {
      return <Redirect to='/login' />
    }
    return (
    
          <Pane
            elevation={1}
            display="flex"
            flexDirection="column"
            padding={10}
            background="white"
            width={this.state.width * 0.8}
            height={this.state.height * 0.9}
            margin={10}
            borderRadius={3}
          >
            {/* <MapContainer width={this.state.width*0.9} height={this.state.height * 0.7} /> */}
            <Pane
              display="flex"
              flexDirection="row"
              width="100%"
              height="10%"
              alignItems="center"
            >
              {/* start */}

              <ComponentAn initialState={{ isShown: false }}>
                {({ state, setState }) => (
                  <React.Fragment>
                    <SideSheet
                      isShown={state.isShown}
                      onCloseComplete={() => setState({ isShown: false })}
                      containerProps={{
                        display: "flex",
                        flex: "1",
                        flexDirection: "column"
                      }}
                    >
                      <Pane
                        zIndex={1}
                        flexShrink={0}
                        elevation={0}
                        backgroundColor="white"
                      >
                        <Pane padding={16}>
                          <Heading size={600}>Post a job</Heading>
                        </Pane>
                      </Pane>
                      <Pane
                        flex="1"
                        overflowY="scroll"
                        background="tint1"
                        padding={16}
                      >
                        <Card
                          backgroundColor="white"
                          elevation={0}
                          height={this.state.height * 0.8}
                          display="flex"
                          flexDirection="column"
                          alignItems="center"
                          justifyContent="center"
                        >
                          {/* content start */}

                          <Pane
                            display="flex"
                            flexDirection="row"
                            justifyContent="center"
                            alignItems="center"
                            padding={10}
                            width="100%"
                          >
                            <TextInput
                              placeholder="Job Title"
                              onChange={this.changeInput}
                              name="jobTitle"
                              value={this.state.jobTitle}
                            />
                          </Pane>
                          <Pane
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            padding={10}
                            width="100%"
                          >
                            <Textarea
                              placeholder="Job Description"
                              name="jobDescription"
                              onChange={this.changeInput}
                              value={this.state.jobDescription}
                            />
                          </Pane>
                          <Pane
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            padding={10}
                            width="100%"
                          >
                            <RangeInput
                              value={this.state.jobBudget}
                              color="light"
                              name="jobBudget"
                              max={1000}
                              onChange={this.changeInput}
                            />
                          </Pane>
                          <Pane
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            padding={10}
                            width="100%"
                          >
                            <ComponentAn initialState={{ selected: null }}>
                              {({ setState, state }) => (
                                <SelectMenu
                                  title="Select a job category"
                                  options={[
                                    "Education & Internships",
                                    "Customer Service & Call Center",
                                    "Office work & administration",
                                    "Transport, logistics & traffic",
                                    "Gardening & Farming",
                                    "Purchasing & Sales",
                                    "Social Sector & Care",
                                    "Gastronomy & Tourism",
                                    "Construction, Craft & Production"
                                  ].map(label => ({ label, value: label }))}
                                  selected={state.selected}
                                  onSelect={item =>
                                    setState({ selected: item.value })
                                  }
                                >
                                  <Button
                                    name="jobCategory"
                                    onChange={this.changeInput}
                                  >
                                    {state.selected || "Choose a job category"}
                                  </Button>
                                </SelectMenu>
                              )}
                            </ComponentAn>
                          </Pane>

                          <Pane
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            padding={10}
                            width="100%"
                          >
                            <FilePicker
                              multiple
                              width={250}
                              marginBottom={32}
                              onChange={files => console.log(files)}
                            />
                          </Pane>

                          {/* content end */}
                        </Card>
                      </Pane>
                    </SideSheet>
                    <Button
                      appearance="primary"
                      onClick={() => setState({ isShown: true })}
                    >
                      Post a new job
                    </Button>
                  </React.Fragment>
                )}
              </ComponentAn>
              {/* end on side */}
            </Pane>
            <Pane
              display="flex"
              flexDirection="row"
              width="100%"
              justifyContent="space-around"
              height="100%"
            >
              <Pane
                elevation={2}
                display="flex"
                flexDirection="column"
                padding={15}
                width="40%"
                height="100%"
              >
                <Pane
                  width="100%"
                  display="flex"
                  marginBottom={5}
                  flexDirection="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Heading size={500} marginTop="default">
                    Jobs posted by you
                  </Heading>
                </Pane>

                <Pane
                  className="content"
                  width="100%"
                  height="85%"
                  elevation={1}
                >
                  {/* start */}

                  <Table>
                    <Table.Head>
                      <Table.SearchHeaderCell />
                      <Table.TextHeaderCell>Last Activity</Table.TextHeaderCell>
                      <Table.TextHeaderCell>ltv</Table.TextHeaderCell>
                    </Table.Head>
                    <Table.VirtualBody height={240}>
                      {postedJobs.length ? (
                        postedJobs.map(profile => (
                          <Table.Row
                            key={profile.id}
                            isSelectable
                            onSelect={() => alert(profile.first_name)}
                          >
                            <Table.TextCell>
                              {profile.first_name}
                            </Table.TextCell>
                            <Table.TextCell>{profile.email}</Table.TextCell>
                            <Table.TextCell isNumber>
                              {profile.ip_address}
                            </Table.TextCell>
                          </Table.Row>
                        ))
                      ) : (
                        <Pane>No jobs posted</Pane>
                      )}
                    </Table.VirtualBody>
                  </Table>

                  {/* end */}
                </Pane>
              </Pane>
              <Pane
                elevation={2}
                display="flex"
                flexDirection="column"
                padding={15}
                width="40%"
                height="100%"
              >
                <Pane
                  width="100%"
                  display="flex"
                  marginBottom={5}
                  flexDirection="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Heading size={500} marginTop="default">
                    Jobs you have applied to
                  </Heading>
                </Pane>

                <Pane
                  className="content"
                  width="100%"
                  height="85%"
                  elevation={1}
                >
                  {/* start */}

                  <Table>
                    <Table.Head>
                      <Table.SearchHeaderCell />
                      <Table.TextHeaderCell>Last Activity</Table.TextHeaderCell>
                      <Table.TextHeaderCell>ltv</Table.TextHeaderCell>
                    </Table.Head>
                    <Table.VirtualBody height={240}>
                      {postedJobs.length ? (
                        postedJobs.map(profile => (
                          <Table.Row
                            key={profile.id}
                            isSelectable
                            onSelect={() => alert(profile.first_name)}
                          >
                            <Table.TextCell>
                              {profile.first_name}
                            </Table.TextCell>
                            <Table.TextCell>{profile.email}</Table.TextCell>
                            <Table.TextCell isNumber>
                              {profile.ip_address}
                            </Table.TextCell>
                          </Table.Row>
                        ))
                      ) : (
                        <Pane>No jobs posted</Pane>
                      )}
                    </Table.VirtualBody>
                  </Table>

                  {/* end */}
                </Pane>
              </Pane>
            </Pane>
          </Pane>
      
     
    );
  }
}




export class Jobs extends Component {
  constructor(props) {
      super(props);
      this.state = {height: props.height,  width: window.innerWidth }
    };
    
  
   
    componentWillMount(){
      

      this.setState({ height: window.innerHeight, width: window.innerWidth });
     
    }
render() {
 
  const { width, height } = this.state;
  const isMobile = width <= 500;
 
  return (
    <NewHome>
      <Page data={this.props} />
   
    
    </NewHome>

     
  )

}
}


const mapStateToProps = state => {
  return state;
};

export default withRouter(connect(mapStateToProps)(Jobs));






