import React, { Component } from "react";
import { Link } from "react-router-dom";

type Props = {
  color: string;
  yearBrand: number;
  nameBrand: string;
  descBrand: string;
};

export default class CardHomeViolet extends Component<Props> {
  render() {
    return (
      <div id={`card-home-${this.props.color}`}>
        <Link to={`/${this.props.color}-car`}>
          <div className="card">
            <header>
              <h4 className="year">{this.props.yearBrand}</h4>
              <h2 className="title">{this.props.nameBrand}</h2>
            </header>
            <div className="text">{this.props.descBrand}</div>
            <button className="btn">Explore Now</button>
            <div className="corners">
              <span className="square"></span>
              <span className="square"></span>
              <span className="square"></span>
              <span className="square"></span>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
