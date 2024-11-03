import React, { Component } from "react";
import lamborghini2 from "../../../assets/img/lamborghini-2.jpg";

export default class ImgSection extends Component {
  render() {
    return (
      <div className="img-container">
        <img src={lamborghini2} alt="" />

        <div className="violet-corners">
          <span className="square"></span>
          <span className="square"></span>
        </div>
      </div>
    );
  }
}
