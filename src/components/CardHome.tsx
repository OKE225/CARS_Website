import React, { Component } from "react";

export default class CardHome extends Component {
  render() {
    return (
      <div id="card-home">
        <div className="card">
          <header>
            <h4 className="year">1938</h4>
            <h2 className="title">Ferrari</h2>
          </header>
          <div className="text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
            pariatur facilis eaque earum minus nostrum recusandae delectus
            atque? Voluptates, tenetur officiis facere maxime molestiae
            exercitationem dolorum enim reprehenderit esse fugiat?
          </div>
          <button className="btn">Explore Now</button>
          <div className="primary-corners">
            <span className="square"></span>
            <span className="square"></span>
            <span className="square"></span>
            <span className="square"></span>
          </div>
        </div>
      </div>
    );
  }
}
