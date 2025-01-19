import React from "react";
import { Link } from "react-router-dom";

type Props = {
  color: string;
  yearBrand: number;
  nameBrand: string;
  descBrand: string;
};

const CardCarouselElement: React.FC<Props> = ({
  color,
  yearBrand,
  nameBrand,
  descBrand,
}) => {
  return (
    <div id={`card-home-${color}`}>
      <Link to={`/${color}-car`}>
        <div className="card">
          <header>
            <h4 className="year">{yearBrand}</h4>
            <h2 className="title">{nameBrand}</h2>
          </header>
          <div className="text">{descBrand}</div>
          <button className="btn">Explore Now</button>
          <div className="corners">
            <span className="square"></span>
            <span className="square"></span>
            <span className="square"></span>
            <span className="square"></span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardCarouselElement;
