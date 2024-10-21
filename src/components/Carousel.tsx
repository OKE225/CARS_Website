import React, { Component } from "react";
import Arrow from "./Arrow";

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
        <Arrow position="left" prevSlide={this.handlePrevSlide} />
        <Arrow position="right" nextSlide={this.handleNextSlide} />
      </div>
    );
  }
}
