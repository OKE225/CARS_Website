import React from "react";
import Navigation from "../Navigation";
import MainContainer from "./Elements/MainContainer";
import Section from "./Elements/Section";
import Footer from "../Footer";

type Props = {
  color: string;
  section: Array<{
    type: "right-text" | "left-text" | "mobile";
    image: string;
    header: string;
    paragraph1: string;
    paragraph2: string;
  }>;
  mainInfo: {
    image: string;
    year: number;
    title: string;
    description: string;
  };
};

const CarSubPage: React.FC<Props> = ({ color, mainInfo, section }) => {
  return (
    <div className={`${color}-page`}>
      <Navigation color={color} />
      <MainContainer color={color} mainInfo={mainInfo} />
      <div className="content">
        {section.map((item, index) => (
          <Section
            key={index}
            color={color}
            type={item.type}
            image={item.image}
            header={item.header}
            paragraph1={item.paragraph1}
            paragraph2={item.paragraph2}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default CarSubPage;
