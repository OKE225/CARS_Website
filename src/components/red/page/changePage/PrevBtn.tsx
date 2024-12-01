import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

export default class PrevBtn extends Component {
  render() {
    return (
      <Link to="/violet-car" className="page-link-red">
        <span className="icon">
          <FaArrowLeft />
        </span>
        <p>Violet page</p>
      </Link>
    );
  }
}
