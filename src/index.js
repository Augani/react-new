import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import ApplyJob from './components/ApplyJob';
import Login from './components/Login';
import Signup from './components/Signup';
import Index from './components/index';
import Home from './components/Home';
import Job from './components/Jobs'
import Profile from './components/Profile';
import Messages from './components/Messages'
import Wallet from './components/Wallet'







const routing = (
    <Router>
      <div>
        <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/home" component={Home}/>
        <Route exact path="/" component={Index} />
        <Route exact path="/messages/:id" component={Messages} />
        <Route exact path="/profile/:id" component={Profile} />
        <Route exact path="/jobs/:id" component={Job} />
        <Route exact path="/wallet" component={Wallet} />

        </Switch>
      </div>
    </Router>
  )


ReactDOM.render(
    routing
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
