import React, { Component } from "react";
import ferrari2 from "../../../assets/img/ferrari-2.jpg";

export default class ImgSection extends Component {
  render() {
    return (
      <div className="img-container">
        <img src={ferrari2} alt="" />

        <div className="red-corners">
          <span className="square"></span>
          <span className="square"></span>
        </div>
      </div>
    );
  }
}
