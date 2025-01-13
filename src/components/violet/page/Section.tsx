import React from "react";
import SectionImg from "./SectionImg";
import lamborghini2 from "../../../assets/img/lamborghini-2.jpg";
import lamborghini3 from "../../../assets/img/lamborghini-3.jpeg";
import lamborghini4 from "../../../assets/img/lamborghini-4.jpg";

type Props = {
  type: "right-text" | "left-text" | "mobile";
  header: string;
  paragraph1: string;
  paragraph2: string;
};

const Section: React.FC<Props> = ({ type, header, paragraph1, paragraph2 }) => {
  switch (type) {
    case "right-text":
      return (
        <div id="section-right-text-violet">
          <SectionImg type="right-text" image={lamborghini2} />
          <div className="text-container">
            <h2>{header}</h2>
            <p>{paragraph1}</p>
            <p>{paragraph2}</p>
          </div>
        </div>
      );
    case "left-text":
      return (
        <div id="section-left-text-violet">
          <div className="text-container">
            <h2>{header}</h2>
            <p>{paragraph1}</p>
            <p>{paragraph2}</p>
          </div>
          <SectionImg type="left-text" image={lamborghini3} />
        </div>
      );
    case "mobile":
      return (
        <div id="section-mobile-text-violet">
          <SectionImg type="mobile" image={lamborghini4} />
          <div className="text-container">
            <h2>{header}</h2>
            <p>{paragraph1}</p>
            <p>{paragraph2}</p>
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default Section;
