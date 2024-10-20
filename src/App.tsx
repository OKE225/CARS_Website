import React, { Component } from "react";

import "./scss/App.scss";
import CarRed from "./components/red/CarRed";
import CarGreen from "./components/green/CarGreen";
import CarViolet from "./components/violet/CarViolet";
import Carousel from "./components/Carousel";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Carousel>
          <CarRed />
          <CarGreen />
          <CarViolet />
        </Carousel>
      </div>
    );
  }
}

export default App;
