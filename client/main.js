import React from 'react';
import ReactDOM from 'react-dom'
import App from '../imports/client/Index'
//import { onPageLoad } from 
Meteor.subscribe("AllPosts");

Meteor.startup(function() {
  ReactDOM.render(<App/>, document.getElementById('app'));
});