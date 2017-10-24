import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  componentDidUpdate(prevProps, prevState) {
    // Initialize collapse button
    $(".button-collapse").sideNav();
    // Initialize collapsible (uncomment the line below if you use the dropdown variation)
    //$('.collapsible').collapsible();
  }
  render() {
    return (
      <nav className="nav-extended">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo center">
            Blog
          </Link>
          <a href="#" data-activates="mobile-demo" className="button-collapse">
            <i className="mdi mdi-menu" />
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/"> Home</Link>
            </li>
            <li>
              <Link to="/post/new"> Add Post</Link>
            </li>
          </ul>
          <ul className="side-nav" id="mobile-demo">
            <li>
              <Link to="/">
                <i className="mdi mdi-home" /> Home
              </Link>
            </li>
            <li>
              <Link to="/post/new">
                <i className="material-icons">add_circle_outline</i> New Post
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
