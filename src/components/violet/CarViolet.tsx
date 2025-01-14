import React, { Component } from "react";
import ImgBackgroundViolet from "./ImgBackgroundViolet";
import NavigationViolet from "./NavigationViolet";
import CardHomeViolet from "./CardHomeViolet";

type Props = {
  color: string;
  yearBrand: number;
  nameBrand: string;
  descBrand: string;
};

export default class CarViolet extends Component<Props> {
  render() {
    return (
      <div className={`car-${this.props.color}`}>
        <ImgBackgroundViolet color={this.props.color} />
        <NavigationViolet color={this.props.color} />
        <CardHomeViolet
          color={this.props.color}
          yearBrand={this.props.yearBrand}
          nameBrand={this.props.nameBrand}
          descBrand={this.props.descBrand}
        />
      </div>
    );
  }
}
