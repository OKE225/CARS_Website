import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

export default class PrevBtn extends Component {
  render() {
    return (
      <Link to="/red-car" className="page-link-green">
        <span className="icon">
          <FaArrowLeft />
        </span>
        <p>Red page</p>
      </Link>
    );
  }
}
