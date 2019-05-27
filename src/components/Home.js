import React, { Component } from 'react'
import MapContainer from './includes/map'
import { Pane, Button, Heading } from 'evergreen-ui';
import {Box, Carousel, Image} from 'grommet'
import IndexNav from './IndexNav';
import Sidebar from './includes/Sidebar';
import { StickyContainer, Sticky } from 'react-sticky';
import { connect } from "react-redux";

import  { Redirect, withRouter } from 'react-router-dom'
import NewHome from './newHome';

class Page extends Component{
  constructor(props) {
    super(props);
    this.state = {height: props.height, data: [{
      kogi: "jdhd",
      plo: ""
    }]};
  }

 
  componentWillMount() {
    

    this.setState({ height: window.innerHeight, width: window.innerWidth });
   
  }
  render(){
    return(
      <Pane height={this.state.height } width={this.state.width } display="flex" flexDirection="row">
      <Pane width={this.state.width * 0.2} style={{position: 'sticky',  left:0, top: 0, bottom: 0}} alignItems="start" justifyContent="center" display="flex" flexDirection="column" height={this.state.height} elevation={2}>
     <Sidebar />
     

       </Pane> 
     
       <Pane width={this.state.width * 0.8} height={this.state.height * 0.8} display="flex" flexDirection="column">

<IndexNav button="login" link="/login" home={true} />
<Pane elevation={1} display="flex"  padding={16} background="white"  margin={10} borderRadius={3}>
{/* <MapContainer width={this.state.width*0.9} height={this.state.height * 0.7} /> */}
<div style={{width: this.state.width * 0.7, height:this.state.height * 0.7}}>

<MapContainer jobsData={this.state.data}/>

 
</div>

</Pane>



</Pane> 
    

     </Pane>
     

    )
  }
}


export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {height: props.height,  width: window.innerWidth }
      };
      
    
     
      componentWillMount(){
        

        this.setState({ height: window.innerHeight, width: window.innerWidth });
       
      }
  render() {
    if (this.props.auth.loggedIn) {
      return <Redirect to='/login' />
    }
    const { width, height } = this.state;
    const isMobile = width <= 500;
   
    return (
      <NewHome>
        {/* <Page /> */}
      <div style={{width: this.props.width ,height: this.props.width}}>
      <MapContainer  jobsData={this.state.data}/>


      </div>
      
      </NewHome>

       
    )
  
  }
}


const mapStateToProps = state => {
  return state;
};

export default withRouter(connect(mapStateToProps)(Home)); 
