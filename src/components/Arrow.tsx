import React, { Component } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type Props = {
  position: "left" | "right";
  nextSlide?: () => void;
  prevSlide?: () => void;
  interval: {
    start: () => void;
    stop: () => void;
  };
};

export default class Arrow extends Component<Props> {
  render() {
    const { position, prevSlide, nextSlide, interval } = this.props;
    return (
      <>
        {position === "left" && (
          <button
            className="left"
            onClick={() => {
              if (prevSlide && interval?.start && interval?.stop) {
                prevSlide();
                interval.stop();
                interval.start();
              }
            }}>
            <IoIosArrowBack color="#eee" />
          </button>
        )}
        {position === "right" && (
          <button
            className="right"
            onClick={() => {
              if (nextSlide && interval?.start && interval?.stop) {
                nextSlide();
                interval.stop();
                interval.start();
              }
            }}>
            <IoIosArrowForward color="#eee" />
          </button>
        )}
      </>
    );
  }
}
