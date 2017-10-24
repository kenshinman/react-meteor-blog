import React, { Component, PropTypes } from "react";
import { createContainer } from "meteor/react-meteor-data";
import PostGridItem from "./snipps/PostGridItem";
import Posts from "../../api/collections/Posts";

class PostsGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.renderPosts = this.renderPosts.bind(this);
  }

  renderPosts() {
    return this.props.posts.map(post => {
      return <PostGridItem key={post._id} post={post} />;
    });
  }
  render() {
    return <div className="row posts-grid">{this.renderPosts()}</div>;
  }
}

export default createContainer(() => {
  return {
    posts: Posts.find({}, {sort: {createdAt: -1}}).fetch()
  };
}, PostsGrid);
