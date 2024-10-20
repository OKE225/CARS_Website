import React, { Component } from "react";

export default class CardHomeViolet extends Component {
  render() {
    return (
      <div id="card-home-violet">
        <div className="card">
          <header>
            <h4 className="year">2137</h4>
            <h2 className="title">Template</h2>
          </header>
          <div className="text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod illo
            corrupti dolorem distinctio, minima, magni ratione nihil ducimus,
            amet placeat pariatur officiis soluta aliquid labore cumque facere
            ipsum similique praesentium!
          </div>
          <button className="btn">Explore Now</button>
          <div className="corners">
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
