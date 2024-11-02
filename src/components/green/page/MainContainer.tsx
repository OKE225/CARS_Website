import React, { Component } from "react";
import porsche1 from "../../../assets/img/porsche-1.jpg";
import PageHeroDescription from "./PageHeroDescription";

export default class MainContainer extends Component {
  render() {
    return (
      <div id="main-green-container">
        <div className="img-container">
          <img src={porsche1} alt="" />
        </div>
        <PageHeroDescription />
      </div>
    );
  }
}
