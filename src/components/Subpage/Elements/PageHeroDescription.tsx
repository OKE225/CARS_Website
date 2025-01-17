import React, { Component } from "react";

type Props = {
  color: string;
  mainInfo: {
    image: string;
    year: number;
    title: string;
    description: string;
  };
};

export default class PageHeroDescription extends Component<Props> {
  render() {
    return (
      <div className={`content-${this.props.color}-container`}>
        <header>
          <h4 className="year">{this.props.mainInfo.year}</h4>
          <h2 className="title">{this.props.mainInfo.title}</h2>
        </header>
        <div className="content">
          <p>{this.props.mainInfo.description}</p>
        </div>
        <div className="corners">
          <span className="square"></span>
          <span className="square"></span>
          <span className="square"></span>
          <span className="square"></span>
        </div>
      </div>
    );
  }
}
