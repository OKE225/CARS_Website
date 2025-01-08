import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

type Props = {
  position: "left" | "right";
  color: "red" | "green" | "violet";
  prevPage?: "red" | "green" | "violet";
  nextPage?: "red" | "green" | "violet";
};

const ArrowChangePage: React.FC<Props> = ({
  position,
  color,
  prevPage,
  nextPage,
}) => {
  return (
    <>
      {position === "left" && (
        <Link to={`/${prevPage}-car`} className={`page-link-${color}`}>
          <span className="icon">
            <FaArrowLeft />
          </span>
          <p>{prevPage} page</p>
        </Link>
      )}
      {position === "right" && (
        <Link to={`/${nextPage}-car`} className={`page-link-${color}`}>
          <p>{nextPage} page</p>
          <span className="icon">
            <FaArrowRight />
          </span>
        </Link>
      )}
    </>
  );
};

export default ArrowChangePage;
