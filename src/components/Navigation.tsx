import React from "react";
import { Link } from "react-router-dom";

type Props = {
  color: string;
};

const Navigation: React.FC<Props> = (props) => {
  return (
    <nav id={`navigation-${props.color}`}>
      <Link to="/">
        <h1>
          CA<span>RS</span>
        </h1>
      </Link>
    </nav>
  );
};

export default Navigation;
