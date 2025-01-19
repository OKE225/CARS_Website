import React from "react";
import ImgBackground from "./ImgBackground";
import Navigation from "../../Navigation";
import CardCarouselElement from "./CardCarouselElement";

type Props = {
  color: string;
  yearBrand: number;
  nameBrand: string;
  descBrand: string;
};

const CarCarouselPage: React.FC<Props> = ({
  color,
  yearBrand,
  nameBrand,
  descBrand,
}) => {
  return (
    <div className="car-page">
      <ImgBackground color={color} />
      <Navigation color={color} />
      <CardCarouselElement
        color={color}
        yearBrand={yearBrand}
        nameBrand={nameBrand}
        descBrand={descBrand}
      />
    </div>
  );
};

export default CarCarouselPage;
