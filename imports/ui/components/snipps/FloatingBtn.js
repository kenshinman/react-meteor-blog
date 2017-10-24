import React from "react";
import {Link} from 'react-router-dom'

const FloatingBtn = ({id, icon}) => {
  return (
    <div className="fixed-action-btn">
      <Link to={`/post/edit/${id}`} className="btn-floating btn-large red">
        <i className="large material-icons">{icon}</i>
      </Link>
    </div>
  );
};


export default FloatingBtn;