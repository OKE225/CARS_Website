import React, { Component } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type Props = {
  position: "left" | "right";
  nextSlide?: () => void;
  prevSlide?: () => void;
};

export default class Arrow extends Component<Props> {
  render() {
    return (
      <>
        {this.props.position === "left" && (
          <button className="left" onClick={this.props.prevSlide}>
            <IoIosArrowBack color="#eee" />
          </button>
        )}
        {this.props.position === "right" && (
          <button className="right" onClick={this.props.nextSlide}>
            <IoIosArrowForward color="#eee" />
          </button>
        )}
      </>
    );
  }
}
