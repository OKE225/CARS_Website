import React, { Component } from "react";

import "./scss/App.scss";
import Arrows from "./components/Arrows";
// import CarRed from "./components/red/CarRed";
import CarGreen from "./components/green/CarGreen";

class App extends Component {
  render() {
    return (
      <div className="app">
        {/* <CarRed /> */}
        <CarGreen />
        <Arrows />
      </div>
    );
  }
}

export default App;
