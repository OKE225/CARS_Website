import React, { Component } from "react";
import ImgTextSection from "./ImgTextSection";

export default class SectionRightText extends Component {
  render() {
    return (
      <div id="section-right-text-red">
        <ImgTextSection />
        <div className="text-container">
          <h2>Logo and Symbolism</h2>
          <p>
            The Ferrari logo, featuring a black horse on a yellow background,
            has its roots in the history of Italian pilot Francesco Baracca from
            World War I. Enzo Ferrari decided to use this symbol as a tribute to
            the pilot, known for his achievements.
          </p>
          <p>
            The black horse is considered a symbol of good luck in Italy,
            further emphasizing the significance of this emblem for the brand.
            The logo has become not only a recognizable mark of Ferrari but also
            a symbol of passion for racing and engineering excellence.
          </p>
        </div>
      </div>
    );
  }
}
