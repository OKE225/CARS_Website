import React, { Component } from "react";
import ferrari4 from "../../../assets/img/ferrari-4.jpg";

export default class MobileImgTextSection extends Component {
  render() {
    return (
      <div className="img-container-mobile">
        <img src={ferrari4} alt="" />

        <div className="red-corners">
          <span className="square"></span>
          <span className="square"></span>
        </div>
      </div>
    );
  }
}
