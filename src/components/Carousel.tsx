import React, { Component } from "react";
import Arrows from "./Arrows";

type Props = {
  children: React.ReactNode[];
};

type State = {
  currentIndex: number;
};

export default class Carousel extends Component<Props, State> {
  state = {
    currentIndex: 0,
  };

  handleNextSlide = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % this.props.children.length,
    }));
  };

  handlePrevSlide = () => {
    this.setState((prevState) => ({
      currentIndex:
        prevState.currentIndex <= 0 ? 0 : prevState.currentIndex - 1,
      // currentIndex: (prevState.currentIndex - 1) % this.props.children.length,
    }));
  };

  render() {
    const { currentIndex } = this.state;
    const translateX = -currentIndex * 100;
    return (
      <div id="carousel-container">
        <div id="carousel" style={{ transform: `translate(${translateX}%)` }}>
          {this.props.children}
        </div>
        <Arrows
          nextSlide={this.handleNextSlide}
          prevSlide={this.handlePrevSlide}
        />
      </div>
    );
  }
}
