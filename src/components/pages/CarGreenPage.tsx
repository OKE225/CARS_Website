import React, { Component } from "react";
import NavigationGreen from "../green/NavigationGreen";
import MainContainer from "../green/page/MainContainer";
import Footer from "../Footer";
import ArrowChangePage from "../ArrowChangePage";
import Section from "../green/page/Section";

export default class CarGreenPage extends Component {
  render() {
    return (
      <div className="green-page">
        <NavigationGreen color="green" />
        <MainContainer />
        <div className="content">
          <Section
            type="right-text"
            header="Technological Innovations"
            paragraph1="Porsche has always been at the forefront of automotive technology.
            The brand pioneered various innovations, such as the introduction of
            turbocharging in production vehicles and advanced aerodynamics in
            sports car design. The 911 Turbo, launched in 1974, was one of the
            first production cars to feature a turbocharged engine, setting a
            new standard for performance."
            paragraph2="Furthermore, Porsche has embraced hybrid technology with models like
            the Panamera E-Hybrid and Taycan, showcasing its commitment to
            sustainability while maintaining high performance."
          />
          <Section
            type="left-text"
            header="Luxury and Customization"
            paragraph1="Porsche vehicles are synonymous with luxury and personalization. The
            brand offers a wide range of customization options through its
            Exclusive Manufaktur program, allowing customers to tailor their
            vehicles to their specific tastes and preferences."
            paragraph2="From bespoke interior materials to unique paint finishes, this level
            of personalization reinforces Porsche's commitment to providing an
            exceptional ownership experience that reflects individual style."
          />
          <Section
            type="mobile"
            header="Global Influence and Future Directions"
            paragraph1="Today, Porsche is a global brand with a strong presence in markets
            around the world. Its vehicles are celebrated not only for their
            performance but also for their distinctive design and engineering
            excellence. The brand continues to expand its lineup while
            maintaining a focus on quality craftsmanship and innovative
            technology. As a result, Porsche has cultivated a loyal customer
            base that values both tradition and modernity."
            paragraph2="Looking ahead, Porsche is committed to evolving with changing
            automotive trends while staying true to its roots. The company is
            investing heavily in electric mobility and aims to have over half of
            its sales come from electric or hybrid vehicles by 2025. This
            strategic shift reflects a broader industry trend toward
            sustainability without compromising on performance—a hallmark of the
            Porsche brand since its inception. As it navigates this transition,
            Porsche remains dedicated to delivering thrilling driving
            experiences that resonate with enthusiasts worldwide."
          />
          <div className="btn-group">
            <ArrowChangePage position="left" color="green" prevPage="red" />
            <ArrowChangePage position="right" color="green" nextPage="violet" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
