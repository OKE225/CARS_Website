import React, { Component } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import "./scss/App.scss";
import Home from "./components/Home";
import CarRedPage from "./components/pages/CarRedPage";
import CarGreenPage from "./components/pages/CarGreenPage";
import CarVioletPage from "./components/pages/CarVioletPage";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/red-car" element={<CarRedPage />} />
          <Route path="/green-car" element={<CarGreenPage />} />
          <Route path="/violet-car" element={<CarVioletPage />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
