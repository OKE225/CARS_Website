import React, { Component } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default class Arrows extends Component {
  render() {
    return (
      <div id="arrows">
        <div className="left-arrow">
          <IoIosArrowBack />
        </div>
        <div className="right-arrow">
          <IoIosArrowForward />
        </div>
      </div>
    );
  }
}
