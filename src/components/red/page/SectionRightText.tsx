import React, { Component } from "react";
import ImgSection from "./ImgTextSection";

export default class SectionRightText extends Component {
  render() {
    return (
      <div id="section-right-text-red">
        <ImgSection />
        <div className="text-container">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
            suscipit, incidunt placeat assumenda pariatur quidem numquam cum?
            Ullam vero enim modi deleniti, eos quam, libero voluptates quas
            molestiae repudiandae dolorem.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, at
            iure. Minus vero nesciunt quam rerum totam. Beatae vero
            reprehenderit quisquam numquam sed itaque modi inventore suscipit
            consequatur quia quibusdam, et architecto distinctio explicabo
            eveniet ipsum iste? Deserunt libero, quasi laudantium eaque iure
            earum voluptatibus architecto et mollitia ducimus at.
          </p>
        </div>
      </div>
    );
  }
}
