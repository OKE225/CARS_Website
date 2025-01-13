import React from "react";
import porsche2 from "../../../assets/img/porsche-2.jpg";
import porsche3 from "../../../assets/img/porsche-3.jpg";
import porsche4 from "../../../assets/img/porsche-4.jpg";
import SectionImg from "./SectionImg";

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
        <div id="section-right-text-green">
          <SectionImg type="right-text" image={porsche2} />
          <div className="text-container">
            <h2>{header}</h2>
            <p>{paragraph1}</p>
            <p>{paragraph2}</p>
          </div>
        </div>
      );
    case "left-text":
      return (
        <div id="section-left-text-green">
          <div className="text-container">
            <h2>{header}</h2>
            <p>{paragraph1}</p>
            <p>{paragraph2}</p>
          </div>
          <SectionImg type="left-text" image={porsche3} />
        </div>
      );
    case "mobile":
      return (
        <div id="section-mobile-text-green">
          <SectionImg type="mobile" image={porsche4} />
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
