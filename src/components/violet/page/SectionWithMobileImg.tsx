import React, { Component } from "react";
import MobileImgTextSection from "./MobileImgTextSection";

export default class SectionWithMobileImg extends Component {
  render() {
    return (
      <div id="section-mobile-text-violet">
        <MobileImgTextSection />
        <div className="text-container">
          <h2>Motorsport Heritage and Global Influence</h2>
          <p>
            Motorsport has played a crucial role in shaping Lamborghini's
            identity and engineering prowess. The brand has participated in
            various racing disciplines, including GT racing and endurance
            events. Lamborghini's commitment to motorsport not only enhances its
            reputation but also serves as a testing ground for new technologies
            that eventually make their way into production vehicles. The success
            of the Lamborghini Super Trofeo series showcases the brand's
            dedication to racing while providing customers with an opportunity
            to experience the thrill of competition behind the wheel of a
            Lamborghini.
          </p>
          <p>
            Today, Lamborghini is recognized as one of the leading luxury
            automotive brands globally. Its distinctive designs and powerful
            performance have garnered a dedicated following among car
            enthusiasts and collectors alike. The brand continues to expand its
            presence in emerging markets while maintaining its roots in Italian
            craftsmanship and engineering excellence. As Lamborghini evolves, it
            remains committed to producing vehicles that embody the spirit of
            innovation and performance that has defined the brand since its
            inception.
          </p>
        </div>
      </div>
    );
  }
}
