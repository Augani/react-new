import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import ApplyJob from './components/ApplyJob';
import Login from './components/Login';
import Signup from './components/Signup';
import Index from './components/index';
import IndexNav from './components/IndexNav'





const routing = (
    <Router>
      <div>
        <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route exact path="/" component={Index} />
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
