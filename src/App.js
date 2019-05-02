import React from 'react';
import { Grommet, Box, Button, Heading } from 'grommet';
import { Notification } from 'grommet-icons'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const theme = {
  global: {
    colors:{
      brand: '#228Be6'
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};


const AppBar = (props)=>(
  <Box
  fill
  tag='header'
  direction='row'
  align='center'
  justify='between'
  background='brand'
  pad={{left: 'medium', right: 'small', vertical: 'small'}}
  elevation='medium'
  style={{zIndex: '1'}}
  {...props}
  />
);

function App() {
  return (
   <Grommet theme={theme} full>
   <AppBar>
        Hello Grommet!
       </AppBar>
   </Grommet>
  );
}

export default App;
