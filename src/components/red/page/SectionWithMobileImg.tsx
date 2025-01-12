import React, { Component } from "react";
import MobileImgTextSection from "./MobileImgTextSection";

export default class SectionWithMobileImg extends Component {
  render() {
    return (
      <div id="section-mobile-text-red">
        <MobileImgTextSection />
        <div className="text-container">
          <h2>Luxury, Exclusivity and Future</h2>
          <p>
            Ferrari vehicles are synonymous with luxury and exclusivity. Each
            model is meticulously designed with comfort and a unique driving
            experience in mind. Many cars are produced in limited editions,
            making ownership even more desirable. Customers can also take
            advantage of personalization options for their vehicles, allowing
            them to create a unique example tailored to their individual
            preferences.
          </p>
          <p>
            Ferrari continually strives for growth and adaptation to changing
            market trends. In light of increasing competition and evolving
            customer expectations, the brand plans further investments in hybrid
            and electric technologies. The future of Ferrari looks promising;
            the company intends to continue its mission of delivering
            exceptional sports vehicles while preserving its legacy of
            innovation and passion for automotive excellence.
          </p>
        </div>
      </div>
    );
  }
}
