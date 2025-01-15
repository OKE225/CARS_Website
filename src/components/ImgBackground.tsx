import React from "react";

type Props = {
  color: string;
};

const ImgBackground: React.FC<Props> = (props) => {
  return <div id={`img-background-${props.color}`}></div>;
};

export default ImgBackground;
