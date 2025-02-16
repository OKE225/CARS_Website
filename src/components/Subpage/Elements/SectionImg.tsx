import React from "react";

type Props = {
  type: "right-text" | "left-text" | "mobile";
  color: string;
  image: string;
};

const SectionImg: React.FC<Props> = ({ type, image, color }) => {
  switch (type) {
    case "right-text":
      return (
        <div className="img-container">
          <img src={image} alt="" />
          <div className={`${color}-corners`}>
            <span className="square"></span>
            <span className="square"></span>
          </div>
        </div>
      );
    case "left-text":
      return (
        <div className="img-container-2">
          <img src={image} alt="" />
          <div className={`${color}-corners`}>
            <span className="square"></span>
            <span className="square"></span>
          </div>
        </div>
      );
    case "mobile":
      return (
        <div className="img-container-mobile">
          <img src={image} alt="" />
          <div className={`${color}-corners`}>
            <span className="square"></span>
            <span className="square"></span>
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default SectionImg;
