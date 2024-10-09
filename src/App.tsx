import React from "react";
import Navigation from "./components/Navigation";
import Arrows from "./components/Arrows";
import "./scss/App.scss";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Arrows />
    </div>
  );
}

export default App;
