import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PostGridItem extends Component {
  state = {};
  render() {
    const { _id, title, content, featuredImage, author } = this.props.post;
    return (
      <div className="">
        <div className="card hoverable">
          <div className="card-image">
            <Link to={`/posts/${_id}`}>
              <img src={featuredImage} />
            </Link>
            <Link
              to={`/posts/${_id}`}
              className="btn-floating halfway-fab waves-effect waves-light red"
            >
              <i className="mdi mdi-plus" />
            </Link>
          </div>
          <div className="card-content">
            <Link to={`/posts/${_id}`}>
              <span className="card-title">{title}</span>
            </Link>
            <p>{content}</p>
          </div>
          <div className="card-action">
            <Link to={`/posts/${_id}`}>Read More</Link>
            <Link to={`/posts/${_id}`}>Share</Link>
          </div>
        </div>
      </div>
    );
  }
}
