import React from "react";

type Props = {
  color: string;
  mainInfo: {
    image: string;
    year: number;
    title: string;
    description: string;
  };
};

const PageHeroDescription: React.FC<Props> = ({ color, mainInfo }) => {
  return (
    <div className={`content-${color}-container`}>
      <header>
        <h4 className="year">{mainInfo.year}</h4>
        <h2 className="title">{mainInfo.title}</h2>
      </header>
      <div className="content">
        <p>{mainInfo.description}</p>
      </div>
      <div className="corners">
        <span className="square"></span>
        <span className="square"></span>
        <span className="square"></span>
        <span className="square"></span>
      </div>
    </div>
  );
};

export default PageHeroDescription;
