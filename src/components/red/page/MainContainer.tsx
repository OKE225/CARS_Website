import React, { Component } from "react";
import ferrari1 from "../../../assets/img/ferrari-1.jpg";
import PageHeroDescription from "./PageHeroDescription";

export default class MainContainer extends Component {
  render() {
    return (
      <div id="main-red-container">
        <div className="img-container">
          <img src={ferrari1} alt="" />
        </div>
        <PageHeroDescription />
      </div>
    );
  }
}
