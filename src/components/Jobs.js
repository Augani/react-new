import React, { Component } from 'react'
import MapContainer from './includes/map'
import { Pane, Button, Heading } from 'evergreen-ui';
import {Box, Carousel, Image} from 'grommet'
import IndexNav from './IndexNav';
import Sidebar from './includes/Sidebar'


export class Jobs extends Component {
    constructor(props) {
        super(props);
        this.state = {height: props.height};
      }
    
     
      componentWillMount() {
        this.setState({ height: window.innerHeight, width: window.innerWidth });
       
      }
  render() {
    const { width } = this.state;
    const isMobile = width <= 500;
    if(isMobile){
        return (
            <Pane height={this.state.height * 0.9}>
            <IndexNav button="login" link="/login" />
            <Pane elevation={1} display="flex"  height={this.state.height * 0.8} flexDirection="column" padding={16} background="white"  margin={10} borderRadius={3}>
           
            <MapContainer />
          </Pane>

            </Pane>
            
        )

    }
    return (
        <Pane height={this.state.height } width={this.state.width} display="flex" flexDirection="row">
         <Pane width={this.state.width * 0.2} alignItems="start" justifyContent="center" display="flex" flexDirection="column" height={this.state.height} elevation={2}>
        <Sidebar />
        

          </Pane> 
        
      <Pane width={this.state.width * 0.9} height={this.state.height * 0.9} display="flex" flexDirection="column">

      <IndexNav button="login" link="/login" home={true} />
        <Pane elevation={1} display="flex"  padding={16} background="white" width={this.state.width * 0.8} height={this.state.height * 0.9} margin={10} borderRadius={3}>
        {/* <MapContainer width={this.state.width*0.9} height={this.state.height * 0.7} /> */}
      
      </Pane>
     


      </Pane> 
       

        </Pane>
        
    )
  
  }
}
export default Jobs
