import React, { Component } from "react";
import ImgBackgroundGreen from "./ImgBackgroundGreen";
import NavigationGreen from "./NavigationGreen";
import CardHomeGreen from "./CardHomeGreen";

export default class CarGreen extends Component {
  render() {
    return (
      <div className="car-green">
        <ImgBackgroundGreen />
        <NavigationGreen />
        <CardHomeGreen />
      </div>
    );
  }
}
