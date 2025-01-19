import React from "react";
import PageHeroDescription from "./PageHeroDescription";

type Props = {
  color: string;
  mainInfo: {
    image: string;
    year: number;
    title: string;
    description: string;
  };
};

const MainContainer: React.FC<Props> = ({ color, mainInfo }) => {
  return (
    <div id={`main-${color}-container`}>
      <div className="img-container">
        <img src={mainInfo.image} alt="" />
      </div>
      <PageHeroDescription color={color} mainInfo={mainInfo} />
    </div>
  );
};

export default MainContainer;
