import React, { Component } from "react";
import porsche4 from "../../../assets/img/porsche-4.jpg";

export default class MobileImgTextSection extends Component {
  render() {
    return (
      <div className="img-container-mobile">
        <img src={porsche4} alt="" />

        <div className="green-corners">
          <span className="square"></span>
          <span className="square"></span>
        </div>
      </div>
    );
  }
}
