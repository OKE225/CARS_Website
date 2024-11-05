import React, { Component } from "react";
import porsche3 from "../../../assets/img/porsche-3.jpg";

export default class ImgTextSection2 extends Component {
  render() {
    return (
      <div className="img-container-2">
        <img src={porsche3} alt="" />

        <div className="green-corners">
          <span className="square"></span>
          <span className="square"></span>
        </div>
      </div>
    );
  }
}
