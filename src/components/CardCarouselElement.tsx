import React from "react";
import { Link } from "react-router-dom";

type Props = {
  color: string;
  yearBrand: number;
  nameBrand: string;
  descBrand: string;
};

const CardCarouselElement: React.FC<Props> = (props) => {
  return (
    <div id={`card-home-${props.color}`}>
      <Link to={`/${props.color}-car`}>
        <div className="card">
          <header>
            <h4 className="year">{props.yearBrand}</h4>
            <h2 className="title">{props.nameBrand}</h2>
          </header>
          <div className="text">{props.descBrand}</div>
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
