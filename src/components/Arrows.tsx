import React, { Component } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default class Arrows extends Component {
  render() {
    return (
      <div id="arrows">
        <button className="left">
          <IoIosArrowBack color="#eee" />
        </button>
        <button className="right">
          <IoIosArrowForward color="#eee" />
        </button>
      </div>
    );
  }
}
