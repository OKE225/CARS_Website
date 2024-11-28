import React, { Component } from "react";
import ferrari3 from "../../../assets/img/ferrari-3.jpg";

export default class ImgTextSection2 extends Component {
  render() {
    return (
      <div className="img-container-2">
        <img src={ferrari3} alt="" />

        <div className="red-corners">
          <span className="square"></span>
          <span className="square"></span>
        </div>
      </div>
    );
  }
}
