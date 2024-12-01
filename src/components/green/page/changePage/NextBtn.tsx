import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

export default class NextBtn extends Component {
  render() {
    return (
      <Link to="/violet-car" className="page-link-green">
        <p>Violet page</p>
        <span className="icon">
          <FaArrowRight />
        </span>
      </Link>
    );
  }
}
