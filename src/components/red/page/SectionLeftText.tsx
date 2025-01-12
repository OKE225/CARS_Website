import React, { Component } from "react";
import ImgTextSection2 from "./ImgTextSection2";

export default class SectionLeftText extends Component {
  render() {
    return (
      <div id="section-left-text-red">
        <div className="text-container">
          <h2>Technological Innovations</h2>
          <p>
            Ferrari is renowned for its use of cutting-edge technology in the
            production of its cars. The brand continually invests in research
            and development, allowing it to introduce innovative technical
            solutions. V8 and V12 engines offer not only high power but also a
            distinctive sound that attracts automotive enthusiasts.
          </p>
          <p>
            In recent years, the company has also begun to explore hybrid and
            electric technologies, indicating its commitment to sustainable
            development and the future of automotive engineering.
          </p>
        </div>
        <ImgTextSection2 />
      </div>
    );
  }
}
