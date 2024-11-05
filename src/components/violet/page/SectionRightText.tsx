import React, { Component } from "react";
import ImgSection from "./ImgTextSection";

export default class SectionRightText extends Component {
  render() {
    return (
      <div id="section-right-text-violet">
        <ImgSection />
        <div className="text-container">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias,
            voluptatum nobis! Pariatur expedita quod corporis doloremque dolor,
            necessitatibus iusto veritatis? Nostrum tempore amet ea numquam quo
            cupiditate consequuntur fuga expedita!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo animi,
            explicabo neque voluptatem esse dignissimos cum quam, dolore beatae
            totam vero? Molestiae hic neque, molestias iste rem perferendis
            magni vitae ex voluptates veritatis, aperiam nesciunt, ab quaerat
            mollitia tempora facere fuga quae nostrum quis! Nulla voluptatibus
            fugiat doloremque enim delectus.
          </p>
        </div>
      </div>
    );
  }
}
