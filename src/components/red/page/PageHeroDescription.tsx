import React, { Component } from "react";

export default class PageHeroDescription extends Component {
  render() {
    return (
      <div className="content-red-container">
        <header>
          <h4 className="year">1938</h4>
          <h2 className="title">Ferrari</h2>
        </header>
        <div className="content">
          <p>
            Ferrari is an icon of Italian automotive excellence, with a history
            that dates back to 1938 when Enzo Ferrari founded the company in
            Maranello. Initially, the brand focused on producing racing cars,
            with its first model being the Ferrari 125S, unveiled in 1947. This
            vehicle not only revolutionized racing but also set new standards in
            sports car design. Over the years, Ferrari has become synonymous
            with success on racetracks, winning numerous championship titles in
            Formula 1 and other racing series. Today, the brand is recognized
            worldwide, and its vehicles symbolize luxury and prestige.
          </p>
        </div>
        <div className="corners">
          <span className="square"></span>
          <span className="square"></span>
          <span className="square"></span>
          <span className="square"></span>
        </div>
      </div>
    );
  }
}
