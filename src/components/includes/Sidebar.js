import React, { Component } from 'react'
import {Button, Pane, Avatar} from 'evergreen-ui'

export class Sidebar extends Component {
  state={
    home: false,
    jobs: false,
    messages: false,
    profile: false,
    wallet: false,
    settings: false
  }

  getActive = ()=>{
    switch(this.props.active){
      case "Home":
      this.setState({
        home: true
      });
      break;
      case "Jobs":
      this.setState({
        jobs: true
      });
      break;
      case "Profile":
      this.setState({
        profile: true
      });
      break;
      case "Messages":
      this.setState({
        messages: true
      });
      break;
      case "Wallet":
      this.setState({
        wallet: true
      });
      break;
      case "Settings":
      this.setState({
        settings: true
      });
      break;
      default:
      this.setState({
        home: true
      })
      break;
    }
  }

  componentDidMount(){

  }
  render() {
    const {home, jobs, messages, profile, wallet, settings} = this.state;
    return (
      <Pane   width="100%" display='flex' flexDirection='column'>
     

        <Button appearance="minimal"  is="a" href="/home" isActive={home}  height={35}  iconBefore="home">Home</Button>
         <Button appearance="minimal" is="a" href="/jobs"  isActive={jobs} height={35} iconBefore="briefcase">Jobs</Button>
         <Button appearance="minimal" is="a" href="/messages"  isActive={messages} height={35} iconBefore="chat">Messages</Button>
         <Button appearance="minimal" is="a" href="/profile"  isActive={profile} height={35} iconBefore="person">Profile</Button>
         <Button appearance="minimal" is="a" href="/wallet"  isActive={wallet} height={35} iconBefore="bank-account">Wallet</Button>

         <Button appearance="minimal" is="a" href="/settings"  isActive={settings} height={35} iconBefore="cog">Settings</Button>
      </Pane>
    )
  }
}

export default Sidebar
