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
    const { currentIndex } = this.state;
    const { children } = this.props;
    localStorage.setItem(
      "carouselIndex",
      `${(currentIndex + 1) % children.length}`
    );
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % children.length,
    }));
  };

  handlePrevSlide = () => {
    const { currentIndex } = this.state;
    const { children } = this.props;
    localStorage.setItem(
      "carouselIndex",
      `${currentIndex === 0 ? children.length - 1 : currentIndex - 1}`
    );
    this.setState((prevState) => ({
      currentIndex:
        prevState.currentIndex === 0
          ? children.length - 1
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
    const { children } = this.props;
    return (
      <div id="carousel-container">
        <div id="carousel">
          {React.Children.map(children, (child, index) => {
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
