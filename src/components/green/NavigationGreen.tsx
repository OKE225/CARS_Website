import React, { Component } from "react";
import { Link } from "react-router-dom";

type Props = {
  color: string;
};

export default class NavigationGreen extends Component<Props> {
  render() {
    return (
      <nav id={`navigation-${this.props.color}`}>
        <Link to="/">
          <h1>
            CA<span>RS</span>
          </h1>
        </Link>
      </nav>
    );
  }
}
