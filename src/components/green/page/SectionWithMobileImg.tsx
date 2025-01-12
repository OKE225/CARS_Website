import React, { Component } from "react";
import MobileImgTextSection from "./MobileImgTextSection";

export default class SectionWithMobileImg extends Component {
  render() {
    return (
      <div id="section-mobile-text-green">
        <MobileImgTextSection />
        <div className="text-container">
          <h2>Global Influence and Future Directions</h2>
          <p>
            Today, Porsche is a global brand with a strong presence in markets
            around the world. Its vehicles are celebrated not only for their
            performance but also for their distinctive design and engineering
            excellence. The brand continues to expand its lineup while
            maintaining a focus on quality craftsmanship and innovative
            technology. As a result, Porsche has cultivated a loyal customer
            base that values both tradition and modernity.
          </p>
          <p>
            Looking ahead, Porsche is committed to evolving with changing
            automotive trends while staying true to its roots. The company is
            investing heavily in electric mobility and aims to have over half of
            its sales come from electric or hybrid vehicles by 2025. This
            strategic shift reflects a broader industry trend toward
            sustainability without compromising on performance—a hallmark of the
            Porsche brand since its inception. As it navigates this transition,
            Porsche remains dedicated to delivering thrilling driving
            experiences that resonate with enthusiasts worldwide.
          </p>
        </div>
      </div>
    );
  }
}
