import React, { Component } from "react";
import NavigationRed from "../red/NavigationRed";
import MainContainer from "../red/page/MainContainer";
import SectionRightText from "../red/page/SectionRightText";

export default class CarRedPage extends Component {
  render() {
    return (
      <div className="red-page">
        <NavigationRed />
        <MainContainer />
        <div className="content">
          <SectionRightText />
        </div>
      </div>
    );
  }
}
