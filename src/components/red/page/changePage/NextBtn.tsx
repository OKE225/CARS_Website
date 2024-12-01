import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

export default class NextBtn extends Component {
  render() {
    return (
      <Link to="/green-car" className="page-link-red">
        <p>Green page</p>
        <span className="icon">
          <FaArrowRight />
        </span>
      </Link>
    );
  }
}
