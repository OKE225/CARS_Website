import React, { Component } from "react";
import NavigationViolet from "../violet/NavigationViolet";
import MainContainer from "../violet/page/MainContainer";
import SectionRightText from "../violet/page/SectionRightText";
import SectionLeftText from "../violet/page/SectionLeftText";
import SectionWithMobileImg from "../violet/page/SectionWithMobileImg";
import Footer from "../Footer";
import ArrowChangePage from "../ArrowChangePage";

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
            <ArrowChangePage position="left" color="violet" prevPage="green" />
            <ArrowChangePage position="right" color="violet" nextPage="red" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
