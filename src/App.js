import React from 'react';
import { Provider } from 'react-redux';
import { Route, Link, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import ApplyJob from './components/ApplyJob';
import PropTypes from 'prop-types';
import Login from './components/Login';
import Signup from './components/Signup';
import Index from './components/index';
import Home from './components/Home';
import Job from './components/Jobs'
import Profile from './components/Profile';
import Messages from './components/Messages'
import Wallet from './components/Wallet'
import Settings from './components/Settings';
import Earnings from './components/Earnings';

import { createStore } from 'redux'
import verifyEmail from './components/verifyEmail';
import ResetPassword from './components/ResetPassword';
import newHome from './components/newHome';










const Routing =({store})=> (
  <Provider store={store}>
     <Router>
      <div>
        <Switch>
        <Route path="/login:id?"
         component={Login} />
        <Route path="/signup" component={Signup} />
        <Route exact  path="/" component={Index} />
        <Route path="/home:id?" component={Home}/>
        <Route path="/reset/:key?" component={ResetPassword}/>
       
        <Route exact path="/messages/:id?" component={Messages} />
        <Route path="/profile/:id?"
        

         component={Profile} />
        <Route path="/jobs/:id?" component={Job} />
        
        <Route exact path="/wallet/:id?" component={Wallet} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/earnings" component={Earnings}/>
        <Route exact path="/verify/:key?" component={verifyEmail}/>
        <Route exact path="/bb" component={newHome}/>

        </Switch>
      </div>
    </Router>
  </Provider>
   
  )

  // Routing.propTypes = {
  //   store: PropTypes.object.isRequired
  // }


  export default Routing;