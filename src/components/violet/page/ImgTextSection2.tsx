import React, { Component } from "react";
import lamborghini3 from "../../../assets/img/lamborghini-3.jpeg";

export default class ImgTextSection2 extends Component {
  render() {
    return (
      <div className="img-container-2">
        <img src={lamborghini3} alt="" />

        <div className="violet-corners">
          <span className="square"></span>
          <span className="square"></span>
        </div>
      </div>
    );
  }
}
