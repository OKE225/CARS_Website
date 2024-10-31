import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavigationGreen extends Component {
  render() {
    return (
      <nav id="navigation-green">
        <Link to="/">
          <h1>
            CA<span>RS</span>
          </h1>
        </Link>
      </nav>
    );
  }
}
