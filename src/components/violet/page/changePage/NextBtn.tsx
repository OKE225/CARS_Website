import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

export default class NextBtn extends Component {
  render() {
    return (
      <Link to="/red-car" className="page-link-violet">
        <p>Red page</p>
        <span className="icon">
          <FaArrowRight />
        </span>
      </Link>
    );
  }
}
