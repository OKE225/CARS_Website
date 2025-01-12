import React, { Component } from "react";
import ImgTextSection2 from "./ImgTextSection2";

export default class SectionLeftText extends Component {
  render() {
    return (
      <div id="section-left-text-violet">
        <div className="text-container">
          <h2>Luxury and Customization</h2>
          <p>
            Lamborghini vehicles are synonymous with luxury and exclusivity,
            offering customers an unparalleled level of personalization. Through
            its Ad Personam program, Lamborghini allows buyers to customize
            nearly every aspect of their vehicle, from exterior colors to
            interior materials and finishes.
          </p>
          <p>
            This emphasis on bespoke craftsmanship ensures that each Lamborghini
            is not only a high-performance machine but also a reflection of its
            owner's style and personality. The attention to detail in both
            design and manufacturing processes underscores Lamborghini's
            commitment to delivering an exceptional ownership experience.
          </p>
        </div>
        <ImgTextSection2 />
      </div>
    );
  }
}
