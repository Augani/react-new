import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import AllReducers from './reducers/index';
import { compose } from 'redux'
import  { Redirect } from 'react-router-dom'



import { createStore } from 'redux'
import Routing from './App';

const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );


const store = createStore(AllReducers, 
//   {
//   user: {name: "Kofi"},
//   auth: {loggedIn: false},
//   jobs: {jobs:[{jobName: "jdjdj"}]},
//   wallet: {balance: 78},
//   messages: [{kofi: "hey there"}]
// },
 enhancers);



// function reducer(){
//   return 'state';
// } 

// const store = createStore(reducer);






ReactDOM.render(
 <Routing store={store} />
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
