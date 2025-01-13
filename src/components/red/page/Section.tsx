import React from "react";
import SectionImg from "./SectionImg";
import ferrari2 from "../../../assets/img/ferrari-2.jpg";
import ferrari3 from "../../../assets/img/ferrari-3.jpg";
import ferrari4 from "../../../assets/img/ferrari-4.jpg";

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
        <div id="section-right-text-red">
          <SectionImg type="right-text" image={ferrari2} />
          <div className="text-container">
            <h2>{header}</h2>
            <p>{paragraph1}</p>
            <p>{paragraph2}</p>
          </div>
        </div>
      );
    case "left-text":
      return (
        <div id="section-left-text-red">
          <div className="text-container">
            <h2>{header}</h2>
            <p>{paragraph1}</p>
            <p>{paragraph2}</p>
          </div>
          <SectionImg type="left-text" image={ferrari3} />
        </div>
      );
    case "mobile":
      return (
        <div id="section-mobile-text-red">
          <SectionImg type="mobile" image={ferrari4} />
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
