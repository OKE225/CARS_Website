import React, { Component } from "react";

import "./scss/App.scss";
import Arrows from "./components/Arrows";
import CarRed from "./components/red/CarRed";

class App extends Component {
  render() {
    return (
      <div className="app">
        <CarRed />
        <Arrows />
      </div>
    );
  }
}

export default App;
