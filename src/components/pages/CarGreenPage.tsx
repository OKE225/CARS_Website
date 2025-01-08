import React, { Component } from "react";
import NavigationGreen from "../green/NavigationGreen";
import MainContainer from "../green/page/MainContainer";
import SectionRightText from "../green/page/SectionRightText";
import SectionLeftText from "../green/page/SectionLeftText";
import SectionWithMobileImg from "../green/page/SectionWithMobileImg";
import Footer from "../Footer";
import ArrowChangePage from "../ArrowChangePage";

export default class CarGreenPage extends Component {
  render() {
    return (
      <div className="green-page">
        <NavigationGreen />
        <MainContainer />
        <div className="content">
          <SectionRightText />
          <SectionLeftText />
          <SectionWithMobileImg />
          <div className="btn-group">
            <ArrowChangePage position="left" color="green" prevPage="red" />
            <ArrowChangePage position="right" color="green" nextPage="violet" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
