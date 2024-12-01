import React, { Component } from "react";
import NavigationRed from "../red/NavigationRed";
import MainContainer from "../red/page/MainContainer";
import SectionRightText from "../red/page/SectionRightText";
import SectionLeftText from "../red/page/SectionLeftText";
import SectionWithMobileImg from "../red/page/SectionWithMobileImg";
import PrevBtn from "../red/page/changePage/PrevBtn";
import NextBtn from "../red/page/changePage/NextBtn";
import Footer from "../red/page/footer/Footer";

export default class CarRedPage extends Component {
  render() {
    return (
      <div className="red-page">
        <NavigationRed />
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
