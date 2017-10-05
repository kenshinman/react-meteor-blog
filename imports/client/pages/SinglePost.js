import { Meteor } from "meteor/meteor";
import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { createContainer } from "meteor/react-meteor-data";
import Posts from "../../api/collections/Posts";
import FloatingBtn from '../components/snipps/FloatingBtn'

class SinglePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      createdAt: ""
    };
  }

  componentWillMount() {
    //Meteor.subscribe("AllPosts");
  }
  render() {
    if (this.props.post) {
      const { _id, title, content, createdAt, author, featuredImage } = this.props.post;
      return (
        <div>
          <Navbar />
          <div className="container">
            <div className="row">
              <div className="col s12 m10 offset-m1">
                <h4>{title}</h4>
                <p className="">
                  Created by {author} on {createdAt.toLocaleString()}
                </p>
                <img src={featuredImage} className="responsive-img" />
                <p className="flow-text">{content}</p>
              </div>
            </div>
          </div>
          <FloatingBtn id={_id} icon={'mode_edit'}/>
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

export default createContainer(props => {
  const id = props.match.params.id;
  const handle = Meteor.subscribe("AllPosts");

  if (handle) {
    //console.log(post);
    return {
      post: Posts.findOne({ _id: id })
    };
  }
}, SinglePost);
