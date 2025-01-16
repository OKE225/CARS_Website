import React, { Component } from "react";
import PageHeroDescription from "./PageHeroDescription";

type Props = {
  color: string;
  mainInfo: {
    image: string;
    year: number;
    title: string;
    description: string;
  };
};

export default class MainContainer extends Component<Props> {
  render() {
    return (
      <div id={`main-${this.props.color}-container`}>
        <div className="img-container">
          <img src={this.props.mainInfo.image} alt="" />
        </div>
        <PageHeroDescription
          color={this.props.color}
          mainInfo={this.props.mainInfo}
        />
      </div>
    );
  }
}
