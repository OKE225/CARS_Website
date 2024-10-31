import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavigationViolet extends Component {
  render() {
    return (
      <nav id="navigation-violet">
        <Link to="/">
          <h1>
            CA<span>RS</span>
          </h1>
        </Link>
      </nav>
    );
  }
}
