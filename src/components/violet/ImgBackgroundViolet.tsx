import React, { Component } from "react";

type Props = {
  color: string;
};

export default class ImgBackgroundViolet extends Component<Props> {
  render() {
    return <div id={`img-background-${this.props.color}`}></div>;
  }
}
