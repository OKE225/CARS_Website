import React, { Component } from "react";
import ImgTextSection from "./ImgTextSection";

export default class SectionRightText extends Component {
  render() {
    return (
      <div id="section-right-text-violet">
        <ImgTextSection />
        <div className="text-container">
          <h2>Technological Innovations</h2>
          <p>
            Lamborghini has always been at the forefront of automotive
            technology, consistently incorporating cutting-edge innovations into
            its vehicles. The brand is known for its use of lightweight
            materials such as carbon fiber, which enhances performance without
            compromising safety. Additionally, Lamborghini has embraced
            advancements in aerodynamics and engine technology, resulting in
            vehicles that deliver exhilarating speed and handling.
          </p>
          <p>
            The introduction of all-wheel drive systems in models like the
            Gallardo and Huracán has further improved traction and stability,
            allowing drivers to experience the full potential of these
            high-performance machines.
          </p>
        </div>
      </div>
    );
  }
}
