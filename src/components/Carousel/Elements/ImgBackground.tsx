import React from "react";

type Props = {
  color: string;
};

const ImgBackground: React.FC<Props> = ({ color }) => {
  return <div id={`img-background-${color}`}></div>;
};

export default ImgBackground;
