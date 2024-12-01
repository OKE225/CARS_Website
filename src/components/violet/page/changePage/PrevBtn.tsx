import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

export default class PrevBtn extends Component {
  render() {
    return (
      <Link to="/green-car" className="page-link-violet">
        <span className="icon">
          <FaArrowLeft />
        </span>
        <p>Green page</p>
      </Link>
    );
  }
}
