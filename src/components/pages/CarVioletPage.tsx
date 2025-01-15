import React, { Component } from "react";
// import NavigationViolet from "../violet/NavigationViolet";
import Navigation from "../Navigation";
import MainContainer from "../violet/page/MainContainer";
import Footer from "../Footer";
import ArrowChangePage from "../ArrowChangePage";
import Section from "../violet/page/Section";

export default class CarVioletPage extends Component {
  render() {
    return (
      <div className="violet-page">
        <Navigation color="violet" />
        <MainContainer />
        <div className="content">
          <Section
            type="right-text"
            header="Technological Innovations"
            paragraph1="Lamborghini has always been at the forefront of automotive
            technology, consistently incorporating cutting-edge innovations into
            its vehicles. The brand is known for its use of lightweight
            materials such as carbon fiber, which enhances performance without
            compromising safety. Additionally, Lamborghini has embraced
            advancements in aerodynamics and engine technology, resulting in
            vehicles that deliver exhilarating speed and handling."
            paragraph2="The introduction of all-wheel drive systems in models like the
            Gallardo and Huracán has further improved traction and stability,
            allowing drivers to experience the full potential of these
            high-performance machines."
          />
          <Section
            type="left-text"
            header="Luxury and Customization"
            paragraph1="Lamborghini vehicles are synonymous with luxury and exclusivity,
            offering customers an unparalleled level of personalization. Through
            its Ad Personam program, Lamborghini allows buyers to customize
            nearly every aspect of their vehicle, from exterior colors to
            interior materials and finishes."
            paragraph2="This emphasis on bespoke craftsmanship ensures that each Lamborghini
            is not only a high-performance machine but also a reflection of its
            owner's style and personality. The attention to detail in both
            design and manufacturing processes underscores Lamborghini's
            commitment to delivering an exceptional ownership experience."
          />
          <Section
            type="mobile"
            header="Motorsport Heritage and Global Influence"
            paragraph1="Motorsport has played a crucial role in shaping Lamborghini's
            identity and engineering prowess. The brand has participated in
            various racing disciplines, including GT racing and endurance
            events. Lamborghini's commitment to motorsport not only enhances its
            reputation but also serves as a testing ground for new technologies
            that eventually make their way into production vehicles. The success
            of the Lamborghini Super Trofeo series showcases the brand's
            dedication to racing while providing customers with an opportunity
            to experience the thrill of competition behind the wheel of a
            Lamborghini."
            paragraph2="Today, Lamborghini is recognized as one of the leading luxury
            automotive brands globally. Its distinctive designs and powerful
            performance have garnered a dedicated following among car
            enthusiasts and collectors alike. The brand continues to expand its
            presence in emerging markets while maintaining its roots in Italian
            craftsmanship and engineering excellence. As Lamborghini evolves, it
            remains committed to producing vehicles that embody the spirit of
            innovation and performance that has defined the brand since its
            inception."
          />
          <div className="btn-group">
            <ArrowChangePage position="left" color="violet" prevPage="green" />
            <ArrowChangePage position="right" color="violet" nextPage="red" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
