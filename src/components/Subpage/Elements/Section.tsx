import React from "react";
import SectionImg from "./SectionImg";

type Props = {
  color: string;
  type: any;
  image: string;
  header: string;
  paragraph1: string;
  paragraph2: string;
};

const Section: React.FC<Props> = ({
  type,
  color,
  image,
  header,
  paragraph1,
  paragraph2,
}) => {
  switch (type) {
    case "right-text":
      return (
        <div id={`section-right-text-${color}`}>
          <SectionImg type="right-text" color={color} image={image} />
          <div className="text-container">
            <h2>{header}</h2>
            <p>{paragraph1}</p>
            <p>{paragraph2}</p>
          </div>
        </div>
      );
    case "left-text":
      return (
        <div id={`section-left-text-${color}`}>
          <div className="text-container">
            <h2>{header}</h2>
            <p>{paragraph1}</p>
            <p>{paragraph2}</p>
          </div>
          <SectionImg type="left-text" color={color} image={image} />
        </div>
      );
    case "mobile":
      return (
        <div id={`section-mobile-text-${color}`}>
          <SectionImg type="mobile" color={color} image={image} />
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
