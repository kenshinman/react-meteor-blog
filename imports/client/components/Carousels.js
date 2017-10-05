import React, { Component } from "react";
import {Link } from 'react-router-dom'
export class MainCarousel extends Component {
  state = {};
  render() {
    return (
      <div className="carousel">
        <Link className="carousel-item" to="/post/id">
          <img src="http://loremflickr.com/350/350/nature?random=1" />
        </Link>
        <Link className="carousel-item" to="/post/id">
          <img src="http://loremflickr.com/350/350/nature?random=2" />
        </Link>
        <Link className="carousel-item" to="/post/id">
          <img src="http://loremflickr.com/350/350/nature?random=3" />
        </Link>
        <Link className="carousel-item" to="/post/id">
          <img src="http://loremflickr.com/350/350/nature?random=4" />
        </Link>
        <Link className="carousel-item" to="/post/id">
          <img src="http://loremflickr.com/350/350/nature?random=5" />
        </Link>
        <Link className="carousel-item" to="/post/id">
          <img src="http://loremflickr.com/350/350/nature?random=6" />
        </Link>
      </div>
    );
  }
}
