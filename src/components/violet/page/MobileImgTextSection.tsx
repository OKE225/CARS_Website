import React, { Component } from "react";
import lamborghini4 from "../../../assets/img/lamborghini-4.jpg";

export default class MobileImgTextSection extends Component {
  render() {
    return (
      <div className="img-container-mobile">
        <img src={lamborghini4} alt="" />

        <div className="violet-corners">
          <span className="square"></span>
          <span className="square"></span>
        </div>
      </div>
    );
  }
}
