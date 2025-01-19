import React, { Component } from "react";
import Arrow from "../Arrow";

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
    const savedIndex = localStorage.getItem("carouselIndex");
    if (savedIndex) {
      this.setState(() => ({ currentIndex: Number(savedIndex) }));
    }
    this.startAutoSlide();
  }

  componentWillUnmount(): void {
    this.stopAutoSlide();
  }

  handleNextSlide = () => {
    localStorage.setItem(
      "carouselIndex",
      `${(this.state.currentIndex + 1) % this.props.children.length}`
    );
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % this.props.children.length,
    }));
  };

  handlePrevSlide = () => {
    localStorage.setItem(
      "carouselIndex",
      `${
        this.state.currentIndex === 0
          ? this.props.children.length - 1
          : this.state.currentIndex - 1
      }`
    );
    this.setState((prevState) => ({
      currentIndex:
        prevState.currentIndex === 0
          ? this.props.children.length - 1
          : prevState.currentIndex - 1,
    }));
  };

  startAutoSlide = () => {
    this.intervalId = setInterval(this.handleNextSlide, 5000);
  };

  stopAutoSlide = () => {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  };

  render() {
    const { currentIndex } = this.state;
    return (
      <div id="carousel-container">
        <div id="carousel">
          {React.Children.map(this.props.children, (child, index) => {
            if (React.isValidElement(child)) {
              const isActive = currentIndex === index ? "active" : "";
              return (
                <div className={`carousel-element ${isActive}`} key={index}>
                  {child}
                </div>
              );
            }
            return null;
          })}
        </div>
        <Arrow
          position="left"
          prevSlide={this.handlePrevSlide}
          interval={{ start: this.startAutoSlide, stop: this.stopAutoSlide }}
        />
        <Arrow
          position="right"
          nextSlide={this.handleNextSlide}
          interval={{ start: this.startAutoSlide, stop: this.stopAutoSlide }}
        />
      </div>
    );
  }
}
