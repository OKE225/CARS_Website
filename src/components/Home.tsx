import React, { Component } from "react";

import CarRed from "./red/CarRed";
import CarGreen from "./green/CarGreen";
import CarViolet from "./violet/CarViolet";
import Carousel from "./Carousel";

export default class Home extends Component {
  render() {
    return (
      <>
        <Carousel>
          <CarRed />
          <CarGreen />
          <CarViolet />
        </Carousel>
      </>
    );
  }
}
