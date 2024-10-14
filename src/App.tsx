import React, { Component } from "react";

import "./scss/App.scss";
import NavigationRed from "./components/red/NavigationRed";
import Arrows from "./components/Arrows";
import CardHomeRed from "./components/red/CardHomeRed";
import ImgBackgroundRed from "./components/red/ImgBackgroundRed";

class App extends Component {
  render() {
    return (
      <div className="app">
        <ImgBackgroundRed />
        <NavigationRed />
        <CardHomeRed />
        <Arrows />
      </div>
    );
  }
}

export default App;
