import React, { Component } from "react";

export default class PageHeroDescription extends Component {
  render() {
    return (
      <div className="content-green-container">
        <header>
          <h4 className="year">1931</h4>
          <h2 className="title">Porsche</h2>
        </header>
        <div className="content">
          <p>
            Porsche's history began in 1931 when Ferdinand Porsche founded the
            company "Dr. Ing. h. c. F. Porsche GmbH" in Stuttgart, Germany.
            Initially, the firm focused on vehicle development and consulting
            rather than manufacturing cars under its own name. The first
            significant project was the design of the Volkswagen Beetle, which
            became one of the most successful car designs in history. After
            World War II, Ferdinand's son, Ferry Porsche, took the reins and
            introduced the first car to carry the Porsche name—the Porsche
            356—in 1948. This model marked the beginning of Porsche's legacy as
            a manufacturer of high-performance sports cars.
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
