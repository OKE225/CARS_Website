import React from "react";
import ImgTextSection from "./ImgTextSection";
import ImgTextSection2 from "./ImgTextSection2";
import MobileImgTextSection from "./MobileImgTextSection";

type Props = {
  type: "right-text" | "left-text" | "mobile";
  header: string;
  paragraph1: string;
  paragraph2: string;
  img?: string;
};

const Section: React.FC<Props> = ({
  type,
  header,
  paragraph1,
  paragraph2,
  img,
}) => {
  switch (type) {
    case "right-text":
      return (
        <div id="section-right-text-green">
          <ImgTextSection />
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
          <ImgTextSection2 />
        </div>
      );
    case "mobile":
      return (
        <div id="section-mobile-text-green">
          <MobileImgTextSection />
          <div className="text-container">
            <h2>{header}</h2>
            <p>{paragraph1}</p>
            <p>{paragraph2}</p>
          </div>
        </div>
      );
  }
  return null;
};

export default Section;
