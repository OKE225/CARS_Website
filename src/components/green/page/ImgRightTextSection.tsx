import React, { Component } from "react";
import porsche2 from "../../../assets/img/porsche-2.jpg";

export default class ImgSection extends Component {
  render() {
    return (
      <div className="img-container">
        <img src={porsche2} alt="" />

        <div className="green-corners">
          <span className="square"></span>
          <span className="square"></span>
        </div>
      </div>
    );
  }
}
