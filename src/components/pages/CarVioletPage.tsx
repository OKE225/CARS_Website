import React, { Component } from "react";
import NavigationViolet from "../violet/NavigationViolet";
import MainContainer from "../violet/page/MainContainer";
import SectionRightText from "../violet/page/SectionRightText";
import SectionLeftText from "../violet/page/SectionLeftText";
import SectionWithMobileImg from "../violet/page/SectionWithMobileImg";

export default class CarVioletPage extends Component {
  render() {
    return (
      <>
        <NavigationViolet />
        <MainContainer />
        <div className="content">
          <SectionRightText />
          <SectionLeftText />
          <SectionWithMobileImg />
        </div>
      </>
    );
  }
}
