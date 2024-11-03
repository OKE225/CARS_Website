import React, { Component } from "react";
import ImgSection from "./ImgRightTextSection";

export default class SectionRightText extends Component {
  render() {
    return (
      <div id="section-right-text-green">
        <ImgSection />
        <div className="text-container">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
            mollitia ipsum aut dolore velit corporis earum suscipit vitae
            sapiente saepe enim vel quaerat ad, incidunt eius accusamus.
            Dignissimos, nisi consectetur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            veritatis amet doloribus repellat eveniet provident, ad hic eos
            reiciendis rem totam, dolor voluptatem corrupti? Soluta, esse aut.
            Excepturi quasi quas delectus vero quaerat? Laudantium est nostrum
            voluptatibus quis tempora voluptatem modi, nemo, itaque illum
            reprehenderit adipisci maiores. Non, aut nesciunt.
          </p>
        </div>
      </div>
    );
  }
}
