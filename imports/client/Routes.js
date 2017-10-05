import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import SinglePost from "./pages/SinglePost";
import NewPost from "./pages/NewPost";
import EditPost from "./pages/EditPost";

export default class Routes extends Component {
  state = {};
  componentDidUpdate(prevProps, prevState) {
    // Initialize collapse button
    $(".button-collapse").sideNav({
      closeOnClick: true,
      draggable: true
    });
  }
  render() {
    return (
      <main>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/posts/:id" component={SinglePost} />
            <Route exact path="/post/edit/:id" component={EditPost} />
            <Route exact path="/post/new" component={NewPost} />
          </div>
        </Router>
      </main>
    );
  }
}
