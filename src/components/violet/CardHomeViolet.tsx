import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CardHomeViolet extends Component {
  render() {
    return (
      <div id="card-home-violet">
        <Link to="/violet-car">
          <div className="card">
            <header>
              <h4 className="year">1963</h4>
              <h2 className="title">Lamborghini</h2>
            </header>
            <div className="text">
              Lamborghini was founded in 1963 by Ferruccio Lamborghini in
              Sant'Agata Bolognese, aiming to create a grand touring car to
              compete with Ferrari. The first model, the 350 GT, debuted in
              1964, establishing Lamborghini's reputation for high-performance
              sports cars. The Miura, introduced in 1966, popularized the rear
              mid-engine layout and captivated enthusiasts.
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
