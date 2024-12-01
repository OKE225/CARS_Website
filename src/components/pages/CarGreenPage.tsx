import React, { Component } from "react";
import NavigationGreen from "../green/NavigationGreen";
import MainContainer from "../green/page/MainContainer";
import SectionRightText from "../green/page/SectionRightText";
import SectionLeftText from "../green/page/SectionLeftText";
import SectionWithMobileImg from "../green/page/SectionWithMobileImg";
import PrevBtn from "../green/page/changePage/PrevBtn";
import NextBtn from "../green/page/changePage/NextBtn";
import Footer from "../green/page/footer/Footer";

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
            <PrevBtn />
            <NextBtn />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
