import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { MainCarousel } from "../components/Carousels";
import PostsGrid from "../components/PostsGrid";
import Posts from "../../api/collections/Posts";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false
    };
  }

  countPosts() {
    var ready = Meteor.subscribe("AllPosts");
    if(ready){
      //console.log(Posts.find({}).fetch().length);
      this.setState({ready: true})
    }
  }

  componentDidMount() {
    this.countPosts()
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h4>Recent Posts</h4>
          {this.state.ready ? (
            <PostsGrid />
          ) : (
            <h4>There are no posts</h4>
          )}
        </div>
      </div>
    );
  }
}
