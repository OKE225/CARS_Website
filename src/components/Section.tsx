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

const Section: React.FC<Props> = (props) => {
  switch (props.type) {
    case "right-text":
      return (
        <div id={`section-right-text-${props.color}`}>
          <SectionImg
            type="right-text"
            color={props.color}
            image={props.image}
          />
          <div className="text-container">
            <h2>{props.header}</h2>
            <p>{props.paragraph1}</p>
            <p>{props.paragraph2}</p>
          </div>
        </div>
      );
    case "left-text":
      return (
        <div id={`section-left-text-${props.color}`}>
          <div className="text-container">
            <h2>{props.header}</h2>
            <p>{props.paragraph1}</p>
            <p>{props.paragraph2}</p>
          </div>
          <SectionImg
            type="left-text"
            color={props.color}
            image={props.image}
          />
        </div>
      );
    case "mobile":
      return (
        <div id={`section-mobile-text-${props.color}`}>
          <SectionImg type="mobile" color={props.color} image={props.image} />
          <div className="text-container">
            <h2>{props.header}</h2>
            <p>{props.paragraph1}</p>
            <p>{props.paragraph2}</p>
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default Section;
