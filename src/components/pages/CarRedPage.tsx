import React, { Component } from "react";
import NavigationRed from "../red/NavigationRed";
import MainContainer from "../red/page/MainContainer";

export default class CarRedPage extends Component {
  render() {
    return (
      <div className="red-page">
        <NavigationRed />
        <MainContainer />
      </div>
    );
  }
}
