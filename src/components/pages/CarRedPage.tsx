import React, { Component } from "react";
// import NavigationRed from "../red/NavigationRed";
import MainContainer from "../red/page/MainContainer";
import Footer from "../Footer";
import ArrowChangePage from "../ArrowChangePage";
import Section from "../red/page/Section";
import Navigation from "../Navigation";

export default class CarRedPage extends Component {
  render() {
    return (
      <div className="red-page">
        {/* <NavigationRed color="red" /> */}
        <Navigation color="red" />
        <MainContainer />
        <div className="content">
          <Section
            type="right-text"
            header="Logo and Symbolism"
            paragraph1="The Ferrari logo, featuring a black horse on a yellow background,
            has its roots in the history of Italian pilot Francesco Baracca from
            World War I. Enzo Ferrari decided to use this symbol as a tribute to
            the pilot, known for his achievements."
            paragraph2="The black horse is considered a symbol of good luck in Italy,
            further emphasizing the significance of this emblem for the brand.
            The logo has become not only a recognizable mark of Ferrari but also
            a symbol of passion for racing and engineering excellence."
          />
          <Section
            type="left-text"
            header="Technological Innovations"
            paragraph1="Ferrari is renowned for its use of cutting-edge technology in the
            production of its cars. The brand continually invests in research
            and development, allowing it to introduce innovative technical
            solutions. V8 and V12 engines offer not only high power but also a
            distinctive sound that attracts automotive enthusiasts."
            paragraph2="In recent years, the company has also begun to explore hybrid and
            electric technologies, indicating its commitment to sustainable
            development and the future of automotive engineering."
          />
          <Section
            type="mobile"
            header="Luxury, Exclusivity and Future"
            paragraph1="Ferrari vehicles are synonymous with luxury and exclusivity. Each
            model is meticulously designed with comfort and a unique driving
            experience in mind. Many cars are produced in limited editions,
            making ownership even more desirable. Customers can also take
            advantage of personalization options for their vehicles, allowing
            them to create a unique example tailored to their individual
            preferences."
            paragraph2="Ferrari continually strives for growth and adaptation to changing
            market trends. In light of increasing competition and evolving
            customer expectations, the brand plans further investments in hybrid
            and electric technologies. The future of Ferrari looks promising;
            the company intends to continue its mission of delivering
            exceptional sports vehicles while preserving its legacy of
            innovation and passion for automotive excellence."
          />
          <div className="btn-group">
            <ArrowChangePage position="left" color="red" prevPage="violet" />
            <ArrowChangePage position="right" color="red" nextPage="green" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
