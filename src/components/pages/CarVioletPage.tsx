import React, { Component } from "react";
import NavigationViolet from "../violet/NavigationViolet";
import MainContainer from "../violet/page/MainContainer";
import SectionRightText from "../violet/page/SectionRightText";

export default class CarVioletPage extends Component {
  render() {
    return (
      <>
        <NavigationViolet />
        <MainContainer />
        <div className="content">
          <SectionRightText />
        </div>
      </>
    );
  }
}
