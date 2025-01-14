import React, { Component } from "react";
import ImgBackgroundRed from "./ImgBackgroundRed";
import NavigationRed from "./NavigationRed";
import CardHomeRed from "./CardHomeRed";

type Props = {
  color: string;
  yearBrand: number;
  nameBrand: string;
  descBrand: string;
};

export default class CarRed extends Component<Props> {
  render() {
    return (
      <div className={`car-${this.props.color}`}>
        <ImgBackgroundRed color={this.props.color} />
        <NavigationRed color={this.props.color} />
        <CardHomeRed
          color={this.props.color}
          yearBrand={this.props.yearBrand}
          nameBrand={this.props.nameBrand}
          descBrand={this.props.descBrand}
        />
      </div>
    );
  }
}
