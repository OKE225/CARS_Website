import React, { Component } from "react";
import ImgBackgroundRed from "./ImgBackgroundRed";
import NavigationRed from "./NavigationRed";
import CardHomeRed from "./CardHomeRed";

export default class CarRed extends Component {
  render() {
    return (
      <div className="car-red">
        <ImgBackgroundRed />
        <NavigationRed />
        <CardHomeRed />
      </div>
    );
  }
}
