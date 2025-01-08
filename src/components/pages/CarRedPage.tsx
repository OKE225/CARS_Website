import React, { Component } from "react";
import NavigationRed from "../red/NavigationRed";
import MainContainer from "../red/page/MainContainer";
import SectionRightText from "../red/page/SectionRightText";
import SectionLeftText from "../red/page/SectionLeftText";
import SectionWithMobileImg from "../red/page/SectionWithMobileImg";
import Footer from "../Footer";
import ArrowChangePage from "../ArrowChangePage";

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
            <ArrowChangePage position="left" color="red" prevPage="violet" />
            <ArrowChangePage position="right" color="red" nextPage="green" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
