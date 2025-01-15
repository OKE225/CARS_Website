import React from "react";
import ImgBackground from "./ImgBackground";
import Navigation from "./Navigation";
import CardCarouselElement from "./CardCarouselElement";

type Props = {
  color: string;
  yearBrand: number;
  nameBrand: string;
  descBrand: string;
};

const CarPage: React.FC<Props> = (props) => {
  return (
    <div className="car-page">
      <ImgBackground color={props.color} />
      <Navigation color={props.color} />
      <CardCarouselElement
        color={props.color}
        yearBrand={props.yearBrand}
        nameBrand={props.nameBrand}
        descBrand={props.descBrand}
      />
    </div>
  );
};

export default CarPage;
