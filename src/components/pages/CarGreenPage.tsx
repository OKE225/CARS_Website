import React, { Component } from "react";
import NavigationGreen from "../green/NavigationGreen";
import MainContainer from "../green/page/MainContainer";
import SectionRightText from "../green/page/SectionRightText";

export default class CarGreenPage extends Component {
  render() {
    return (
      <>
        <NavigationGreen />
        <MainContainer />
        <div className="content">
          <SectionRightText />
        </div>
      </>
    );
  }
}
