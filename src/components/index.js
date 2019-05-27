import React, { Component } from 'react'
import { Pane, Button, Heading } from 'evergreen-ui';
import {Box, Carousel, Image} from 'grommet'
import IndexNav from './IndexNav';
import { withRouter } from 'react-router-dom'
import { connect} from 'react-redux'

export class index extends Component {
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
            <Pane flex={1} display="flex" alignItems="center" justifyContent="center" margin={10} flexDirection="column" >
            <Box height="medium" width="medium" overflow="hidden">
           
                <Image fit="cover" src={require("../images/undraw_Dest.svg")} />
               
              
            </Box>
            <Pane display="flex" justifyContent="center">
            <Heading size={300}>Find work easily when it matters</Heading>
            </Pane>
           
            </Pane>
            <Pane flex={1}  display="flex" alignItems="center" justifyContent="center" >
            <Pane flexDirection="column" margin={20} flex={1} display="flex" justifyContent="center" alignItems="center">
            <Heading size={500}>Start earning by joining the family now</Heading>
            <Button marginTop={30} is="a" href="/signup" appearance="default">Signup now</Button>
    
            </Pane>
            </Pane>
          </Pane>

            </Pane>
            
        )

    }
    return (
        <Pane height={this.state.height * 0.9}>
        <IndexNav button="login" link="/login" />
        <Pane elevation={1} display="flex"  height={this.state.height * 0.8} padding={16} background="white"  margin={10} borderRadius={3}>
        <Pane flex={1} alignItems="center" justifyContent="center" display="flex">
        <Box height="medium" width="medium" overflow="hidden">
       
            <Image fit="cover" src={require("../images/undraw_Dest.svg")} />
            <Heading size={400}>Find work easily when it matters</Heading>
          
        </Box>
        </Pane>
        <Pane flex={1} alignItems="center" justifyContent="center" display="flex">
        <Pane flexDirection="column" flex={1} display="flex" justifyContent="center" alignItems="center">
        <Heading size={800}>Start earning by joining the family now</Heading>
        <Button marginTop={30} is="a" href="/signup" appearance="default">Signup now</Button>

        </Pane>
        </Pane>
      </Pane>

        </Pane>
        
    )
  }
}

export default withRouter(connect()(index))
