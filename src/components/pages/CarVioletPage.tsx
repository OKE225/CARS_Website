import React, { Component } from "react";
import NavigationViolet from "../violet/NavigationViolet";
import MainContainer from "../violet/page/MainContainer";
import SectionRightText from "../violet/page/SectionRightText";
import SectionLeftText from "../violet/page/SectionLeftText";
import SectionWithMobileImg from "../violet/page/SectionWithMobileImg";
import PrevBtn from "../violet/page/changePage/PrevBtn";
import NextBtn from "../violet/page/changePage/NextBtn";
import Footer from "../violet/page/footer/Footer";

export default class CarVioletPage extends Component {
  render() {
    return (
      <div className="violet-page">
        <NavigationViolet />
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
