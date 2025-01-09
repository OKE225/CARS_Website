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

  intervalId: NodeJS.Timeout | null = null;

  componentDidMount(): void {
    this.startAutoSlide();
  }

  componentWillUnmount(): void {
    this.stopAutoSlide();
  }

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

  startAutoSlide = () => {
    this.intervalId = setInterval(this.handleNextSlide, 6000);
  };

  stopAutoSlide = () => {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  };

  render() {
    const { currentIndex } = this.state;
    const translateX = -currentIndex * 100;
    return (
      <div id="carousel-container">
        <div id="carousel" style={{ transform: `translate(${translateX}%)` }}>
          {React.Children.map(this.props.children, (child, index) => (
            <div
              style={{
                position: "absolute",
                left: `${index * 100}%`,
                transition: "left 0.5s ease-in-out",
                width: "100%",
              }}>
              {child}
            </div>
          ))}
        </div>
        <Arrow position="left" prevSlide={this.handlePrevSlide} />
        <Arrow position="right" nextSlide={this.handleNextSlide} />
      </div>
    );
  }
}
