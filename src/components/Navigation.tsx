import React from "react";
import { Link } from "react-router-dom";

type Props = {
  color: string;
};

const Navigation: React.FC<Props> = ({ color }) => {
  return (
    <nav id={`navigation-${color}`}>
      <Link to="/">
        <h1>
          CA<span>RS</span>
        </h1>
      </Link>
    </nav>
  );
};

export default Navigation;
