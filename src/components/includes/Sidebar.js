import React, { Component } from 'react'
import {Button, Pane, Avatar} from 'evergreen-ui'

export class Sidebar extends Component {
  render() {
    return (
      <Pane justifuContent="center"   width="100%" display='flex' flexDirection='column'>
      {/* <Pane width="100%" justifuContent="center" display="flex" alignItemsCenter="center">
      <Avatar
      alignSelf="center"
  src="https://pbs.twimg.com/profile_images/756196362576723968/6GUgJG4L_400x400.jpg"
  name="Jeroen Ransijn"
  size={90}
/>

      </Pane> */}

        <Button appearance="minimal"  is="a" href="/home" isActive  height={35}  iconBefore="home">Home</Button>
         <Button appearance="minimal" is="a" href="/jobs" height={35} iconBefore="briefcase">Jobs</Button>
         <Button appearance="minimal" is="a" href="/messages" height={35} iconBefore="chat">Messages</Button>
         <Button appearance="minimal" is="a" href="/profile" height={35} iconBefore="person">Profile</Button>
         <Button appearance="minimal" is="a" href="/wallet" height={35} iconBefore="bank-account">Wallet</Button>

         <Button appearance="minimal" is="a" href="/settings" height={35} iconBefore="cog">Settings</Button>
      </Pane>
    )
  }
}

export default Sidebar
