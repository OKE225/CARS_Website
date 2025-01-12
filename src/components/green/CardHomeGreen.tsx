import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CardHomeGreen extends Component {
  render() {
    return (
      <div id="card-home-green">
        <Link to="/green-car">
          <div className="card">
            <header>
              <h4 className="year">1931</h4>
              <h2 className="title">Porsche</h2>
            </header>
            <div className="text">
              Porsche was founded in 1931 by Ferdinand Porsche in Stuttgart,
              Germany, initially as a vehicle development and consulting firm.
              Its first major project was designing the Volkswagen Beetle. After
              World War II, Ferdinand's son, Ferry Porsche, introduced the
              Porsche 356 in 1948, marking the brand's entry into
              high-performance sports cars.
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
