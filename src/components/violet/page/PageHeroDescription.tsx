import React, { Component } from "react";

export default class PageHeroDescription extends Component {
  render() {
    return (
      <div className="content-violet-container">
        <header>
          <h4 className="year">1963</h4>
          <h2 className="title">Lamborghini</h2>
        </header>
        <div className="content">
          <p>
            Lamborghini's journey began in 1963 when Ferruccio Lamborghini, a
            successful Italian entrepreneur, founded Automobili Lamborghini
            S.p.A. in Sant'Agata Bolognese. Initially, Ferruccio was a tractor
            manufacturer who sought to create a refined grand touring car to
            compete with established brands like Ferrari. The company's first
            model, the 350 GT, debuted in 1964 and marked the beginning of
            Lamborghini's reputation for producing high-performance sports cars.
            The Miura, introduced in 1966, further solidified Lamborghini's
            status in the automotive world by establishing the rear mid-engine
            layout as the standard for high-performance vehicles, captivating
            enthusiasts and collectors alike.
          </p>
        </div>
        <div className="corners">
          <span className="square"></span>
          <span className="square"></span>
          <span className="square"></span>
          <span className="square"></span>
        </div>
      </div>
    );
  }
}
