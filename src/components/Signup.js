import React, { Component } from "react";
import { Pane, Button, Heading, TextInputField, TextInput, toaster } from "evergreen-ui";
import IndexNav from './IndexNav';
import { Box, Carousel, Image } from "grommet";
import axios from 'axios';

import { MakeGetRequest, MakePostRequest } from '../functions/custom'


export class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          height: props.height, 
          loading: false,
          name: '',
          skill:'',
          dob: '',
          phone: '',
          password:'',
          email:'',
          confirmpassword: '',
          
         };
      }

      
  changeInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
    
      componentWillMount() {
        this.setState({ height: window.innerHeight, width: window.innerWidth });
        window.addEventListener('resize', this.handleWindowSizeChange);
      }

      
  validateForm=()=>{
    var self = this;
    const { password, confirmpassword, email, name, skill, phone} = this.state;
    if(!password || !confirmpassword || !email || !name || !skill || !phone){
      toaster.warning(
        'All fields are required'
      );
      self.setState({
        loading: false
      })
      return;
    }
    if(password !== confirmpassword){
      toaster.warning(
        'Passwords do not match'
      )
      self.setState({
        loading: false
      })
      return;

    }

    var data = {
      "email": self.state.email,
      "username": self.state.name,
      "skill": self.state.skill,
      "phone": self.state.phone,
      "password": self.state.password,
      "dob": self.state.dob
    }

    MakePostRequest('auth/register', data).then(r=>{
      if(r.data.code != 201){
        self.setState({
          loading: false
        })
        toaster.warning(
          'Error',
          {
            description: r.data.message
          }
        )

        return;
      }
      toaster.success(
        'Account registered successfully',
        {
          description: 'An email has been sent to your account, please click the link in there to verify it'
        }
      )
      self.setState({
        loading: false
      })
      this.props.history.push('/login');

    }).catch(e=>{

    })


    axios.post(this.state.url,
      data).then((res)=>{
        console.log(res);
        if(res.data.code != 150){
          self.setState({
            loading: false
          })
          toaster.warning(
            'Error',
            {
              description: res.data.message
            }
          )

          return;
        }
        toaster.success(
          'Account registered successfully',
          {
            description: 'An email has been sent to your account, please click the link in there to verify it'
          }
        )
        self.setState({
          loading: false
        })
        this.props.history.push('/login');

      }).catch((err)=>{
        console.log(err);
        self.setState({
          loading: false
        })

      })
      

    



  }

    
     
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
      }
      
      handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
      };
      Signup = () => {
       this.setState({
         loading: true
       })
       this.validateForm();
      };
  render() {
    const { width } = this.state;
    const isMobile = width <= 500;
    

    // if(isMobile){
    //     return (
    //         <Pane display="flex" flexDirection="column" height={this.state.height * 0.9} flex={1}>
    //          <IndexNav link="/login" button="Login" />
    //          <Pane width={this.state.width} justifyContent="center" display="flex"> <Heading size={700} >Join Us</Heading></Pane>

    //          <Pane
    //           display="flex"
    //           justifyContent="center"
    //           height={this.state.height * 0.7}
    //           maxHeight={this.state.width}
    //           padding={16}
              
    //           alignItems="center"
    //           background="white"
    //         >
    //            <Pane
    //        flexDirection="column"
    //        height={this.state.height * 0.7}
    //        background="white"
    //        padding={16}
    //      >
    //      <TextInputField
    //          required
    //          label="Full name"
    //          height={35}
    //          width={300}
    //          marginBottom={20}
    //          onChange={this.changeInput}
    //          name="name"
    //        />
    //        <TextInputField
    //          required
    //          label="Skill"
    //          height={35}
    //          width={300}
    //          marginBottom={20}
    //          onChange={this.changeInput}
    //          name="skill"
    //        />
    //        <TextInputField
    //          required
    //          label="Phone number"
    //          type="tel"
    //          height={35}
    //          width={300}
    //          marginBottom={20}
    //          onChange={this.changeInput}
    //          name="phone"
    //        />
          
    //        <TextInputField
    //          required
    //          label="Email"
    //          height={35}
    //          onChange={this.changeInput}
    //          width={300}
    //          name="email"
    //          type="email"
    //          marginBottom={20}
    //        />
    //        <TextInputField
    //          required
    //          label="Date of birth"
    //          height={35}
    //          width={300}
    //          onChange={this.changeInput}
    //          name="dob"
    //          type="date"
    //          marginBottom={20}
    //        />
 
    //       <TextInputField
    //          required
    //          onChange={this.changeInput}
    //          type="password"
    //          name="password"
    //          label="Password"
    //          width={300}
    //          height={35}
             
    //        />
    //         <TextInputField
    //          required
    //          type="password"
    //          name='confirmpassword'
    //          label="Confirm Password"
    //          onChange={this.changeInput}
    //          height={35}
    //          width={300}
              
    //        />
    //        <Pane justifyContent="center" marginTop={20} display="flex">
    //        <Button isLoading={this.state.loading} onClick={this.Signup}>
    //          Signup
    //        </Button>
    //        </Pane>
 
          
    //      </Pane>
    //         </Pane>
        
    //         </Pane>
           
    //          );
    // }
    return (
        <Pane height={this.state.height*0.9} flex={1}>
        <IndexNav button="Login" link="/login" />
        <Pane width={this.state.width} justifyContent="center" display="flex"> <Heading size={700} >Join Us</Heading></Pane>
       
        <Pane
         display="flex"
         padding={16}
         margin={20}
         flexDirection="column"
         background="white"
       >
         <Pane
           flexDirection="column"
           background="white"
           padding={16}
           alignItems="center"
           justifyContent="center"
           height={this.state.height * 0.6}
           display="flex"
         >
         <TextInputField
             required
             label="Full name"
             height={35}
             onChange={this.changeInput}
             name="name"
             width={300}
             marginBottom={20}
           />
           <TextInputField
             required
             label="Skill"
             height={35}
             onChange={this.changeInput}
             name="skill"
             width={300}
             marginBottom={20}
           />
           <TextInputField
             required
             label="Phone number"
             type="tel"
             height={35}
             onChange={this.changeInput}
             name="phone"
             width={300}
             marginBottom={20}
           />
          
           <TextInputField
             required
             onChange={this.changeInput}
             label="Email"
             height={35}
             name="email"
             width={300}
             marginBottom={20}
           />

        <TextInputField
             required
             label="Date of birth"
             height={35}
             width={300}
             name="dob"
             onChange={this.changeInput}
             type="date"
             marginBottom={20}
           />
           

        <TextInputField
             required
             label="Password"
             height={35}
             width={300}
             name="password"
             type="password"
             onChange={this.changeInput}
             
             marginBottom={20}
           />
            <TextInputField
             required
             type="password"
             label="Confirm Password"
             onChange={this.changeInput}
             name="confirmpassword"
             height={35}
             width={300}
             marginBottom={20}
           />

<Pane justifyContent="center" marginTop="20" display="flex">
           <Button isLoading={this.state.loading} onClick={this.Signup}>
             Signup
           </Button>
           </Pane>
          
 
         
    
         </Pane>
        
         
       </Pane>
   
       </Pane>
      
    );
  }
}

export default Signup
