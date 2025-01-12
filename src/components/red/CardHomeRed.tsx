import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CardHomeRed extends Component {
  render() {
    return (
      <div id="card-home-red">
        <Link to="/red-car">
          <div className="card">
            <header>
              <h4 className="year">1938</h4>
              <h2 className="title">Ferrari</h2>
            </header>
            <div className="text">
              Ferrari, founded by Enzo Ferrari in 1938, is a symbol of Italian
              automotive excellence. The brand launched its first model, the
              Ferrari 125S, in 1947, revolutionizing racing and sports car
              design. Over the years, Ferrari has achieved significant success
              in Formula 1 and other series, becoming synonymous with luxury and
              prestige worldwide.
            </div>
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
