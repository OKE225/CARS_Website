import React, { Component } from "react";
import ImgBackgroundGreen from "./ImgBackgroundGreen";
import NavigationGreen from "./NavigationGreen";
import CardHomeGreen from "./CardHomeGreen";

type Props = {
  color: string;
  yearBrand: number;
  nameBrand: string;
  descBrand: string;
};

export default class CarGreen extends Component<Props> {
  render() {
    return (
      <div className={`car-${this.props.color}`}>
        <ImgBackgroundGreen color={this.props.color} />
        <NavigationGreen color={this.props.color} />
        <CardHomeGreen
          color={this.props.color}
          yearBrand={this.props.yearBrand}
          nameBrand={this.props.nameBrand}
          descBrand={this.props.descBrand}
        />
      </div>
    );
  }
}
