import React from "react";
import ReactDOM from "react-dom";
import App from "../imports/ui/Index";

Meteor.startup(function() {
  ReactDOM.render(<App />, document.getElementById("app"));
});
