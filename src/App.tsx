import React from "react";
import Navigation from "./components/Navigation";
import Arrows from "./components/Arrows";
import CardHome from "./components/CardHome";
import "./scss/App.scss";

function App() {
  return (
    <div className="app">
      <Navigation />
      <CardHome />
      <Arrows />
    </div>
  );
}

export default App;
