import React, { Component } from "react";
import ImgTextSection2 from "./ImgTextSection2";

export default class SectionLeftText extends Component {
  render() {
    return (
      <div id="section-left-text-green">
        <div className="text-container">
          <h2>Luxury and Customization</h2>
          <p>
            Porsche vehicles are synonymous with luxury and personalization. The
            brand offers a wide range of customization options through its
            Exclusive Manufaktur program, allowing customers to tailor their
            vehicles to their specific tastes and preferences.
          </p>
          <p>
            From bespoke interior materials to unique paint finishes, this level
            of personalization reinforces Porsche's commitment to providing an
            exceptional ownership experience that reflects individual style.
          </p>
        </div>
        <ImgTextSection2 />
      </div>
    );
  }
}
