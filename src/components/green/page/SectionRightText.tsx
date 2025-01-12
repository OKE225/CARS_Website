import React, { Component } from "react";
import ImgTextSection from "./ImgTextSection";

export default class SectionRightText extends Component {
  render() {
    return (
      <div id="section-right-text-green">
        <ImgTextSection />
        <div className="text-container">
          <h2>Technological Innovations</h2>
          <p>
            Porsche has always been at the forefront of automotive technology.
            The brand pioneered various innovations, such as the introduction of
            turbocharging in production vehicles and advanced aerodynamics in
            sports car design. The 911 Turbo, launched in 1974, was one of the
            first production cars to feature a turbocharged engine, setting a
            new standard for performance.
          </p>
          <p>
            Furthermore, Porsche has embraced hybrid technology with models like
            the Panamera E-Hybrid and Taycan, showcasing its commitment to
            sustainability while maintaining high performance.
          </p>
        </div>
      </div>
    );
  }
}
