import React, { Component } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type Props = {
  nextSlide: () => void;
  prevSlide: () => void;
};

export default class Arrows extends Component<Props> {
  render() {
    return (
      <div id="arrows">
        <button className="left" onClick={this.props.prevSlide}>
          <IoIosArrowBack color="#eee" />
        </button>
        <button className="right" onClick={this.props.nextSlide}>
          <IoIosArrowForward color="#eee" />
        </button>
      </div>
    );
  }
}
