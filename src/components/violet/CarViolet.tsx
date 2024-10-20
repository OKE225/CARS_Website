import React, { Component } from "react";
import ImgBackgroundViolet from "./ImgBackgroundViolet";
import NavigationViolet from "./NavigationViolet";
import CardHomeViolet from "./CardHomeViolet";

export default class CarViolet extends Component {
  render() {
    return (
      <div className="car-violet">
        <ImgBackgroundViolet />
        <NavigationViolet />
        <CardHomeViolet />
      </div>
    );
  }
}
