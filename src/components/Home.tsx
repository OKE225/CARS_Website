import React, { Component } from "react";

import Carousel from "./Carousel/Carousel";
import CarCarouselPage from "./Carousel/Elements/CarCarouselPage";

export default class Home extends Component {
  render() {
    return (
      <>
        <Carousel>
          <CarCarouselPage
            color="red"
            yearBrand={1938}
            nameBrand="Ferrari"
            descBrand="Ferrari, founded by Enzo Ferrari in 1938, is a symbol of Italian
              automotive excellence. The brand launched its first model, the
              Ferrari 125S, in 1947, revolutionizing racing and sports car
              design. Over the years, Ferrari has achieved significant success
              in Formula 1 and other series, becoming synonymous with luxury and
              prestige worldwide."
          />
          <CarCarouselPage
            color="green"
            yearBrand={1931}
            nameBrand="Porsche"
            descBrand="Porsche was founded in 1931 by Ferdinand Porsche in Stuttgart,
              Germany, initially as a vehicle development and consulting firm.
              Its first major project was designing the Volkswagen Beetle. After
              World War II, Ferdinand's son, Ferry Porsche, introduced the
              Porsche 356 in 1948, marking the brand's entry into
              high-performance sports cars."
          />
          <CarCarouselPage
            color="violet"
            yearBrand={1963}
            nameBrand="Lamborghini"
            descBrand="Lamborghini was founded in 1963 by Ferruccio Lamborghini in
              Sant'Agata Bolognese, aiming to create a grand touring car to
              compete with Ferrari. The first model, the 350 GT, debuted in
              1964, establishing Lamborghini's reputation for high-performance
              sports cars. The Miura, introduced in 1966, popularized the rear
              mid-engine layout and captivated enthusiasts."
          />
        </Carousel>
      </>
    );
  }
}
