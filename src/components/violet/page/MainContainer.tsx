import React, { Component } from "react";
import lamborghini1 from "../../../assets/img/lamborghini-1.jpg";
import PageHeroDescription from "./PageHeroDescription";

export default class MainContainer extends Component {
  render() {
    return (
      <div id="main-violet-container">
        <div className="img-container">
          <img src={lamborghini1} alt="" />
        </div>
        <PageHeroDescription />
      </div>
    );
  }
}
