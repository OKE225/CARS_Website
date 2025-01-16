import React, { Component } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import "./scss/App.scss";
import Home from "./components/Home";
import CarSubPage from "./components/CarSubPage";
import ferrari1 from "./assets/img/ferrari-1.jpg";
import ferrari2 from "./assets/img/ferrari-2.jpg";
import ferrari3 from "./assets/img/ferrari-3.jpg";
import ferrari4 from "./assets/img/ferrari-4.jpg";
import porsche1 from "./assets/img/porsche-1.jpg";
import porsche2 from "./assets/img/porsche-2.jpg";
import porsche3 from "./assets/img/porsche-3.jpg";
import porsche4 from "./assets/img/porsche-4.jpg";
import lamborghini1 from "./assets/img/lamborghini-1.jpg";
import lamborghini2 from "./assets/img/lamborghini-2.jpg";
import lamborghini3 from "./assets/img/lamborghini-3.jpeg";
import lamborghini4 from "./assets/img/lamborghini-4.jpg";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/red-car"
            element={
              <CarSubPage
                color="red"
                mainInfo={{
                  image: ferrari1,
                  year: 1938,
                  title: "Ferrari",
                  description:
                    "Ferrari is an icon of Italian automotive excellence, with a history that dates back to 1938 when Enzo Ferrari founded the company in Maranello. Initially, the brand focused on producing racing cars, with its first model being the Ferrari 125S, unveiled in 1947. This vehicle not only revolutionized racing but also set new standards in sports car design. Over the years, Ferrari has become synonymous with success on racetracks, winning numerous championship titles in Formula 1 and other racing series. Today, the brand is recognized worldwide, and its vehicles symbolize luxury and prestige.",
                }}
                section={[
                  {
                    type: "right-text",
                    image: ferrari2,
                    header: "Logo and Symbolism",
                    paragraph1:
                      "The Ferrari logo, featuring a black horse on a yellow background, has its roots in the history of Italian pilot Francesco Baracca from World War I. Enzo Ferrari decided to use this symbol as a tribute to the pilot, known for his achievements.",
                    paragraph2:
                      "The black horse is considered a symbol of good luck in Italy, further emphasizing the significance of this emblem for the brand. The logo has become not only a recognizable mark of Ferrari but also a symbol of passion for racing and engineering excellence.",
                  },
                  {
                    type: "left-text",
                    image: ferrari3,
                    header: "Technological Innovations",
                    paragraph1:
                      "Ferrari is renowned for its use of cutting-edge technology in the production of its cars. The brand continually invests in research and development, allowing it to introduce innovative technical solutions. V8 and V12 engines offer not only high power but also a distinctive sound that attracts automotive enthusiasts.",
                    paragraph2:
                      "In recent years, the company has also begun to explore hybrid and electric technologies, indicating its commitment to sustainable development and the future of automotive engineering.",
                  },
                  {
                    type: "mobile",
                    image: ferrari4,
                    header: "Luxury, Exclusivity and Future",
                    paragraph1:
                      "Ferrari vehicles are synonymous with luxury and exclusivity. Each model is meticulously designed with comfort and a unique driving experience in mind. Many cars are produced in limited editions, making ownership even more desirable. Customers can also take advantage of personalization options for their vehicles, allowing them to create a unique example tailored to their individual preferences.",
                    paragraph2:
                      "Ferrari continually strives for growth and adaptation to changing market trends. In light of increasing competition and evolving customer expectations, the brand plans further investments in hybrid and electric technologies. The future of Ferrari looks promising the company intends to continue its mission of delivering exceptional sports vehicles while preserving its legacy of innovation and passion for automotive excellence.",
                  },
                ]}
              />
            }
          />
          <Route
            path="/green-car"
            element={
              <CarSubPage
                color="green"
                mainInfo={{
                  image: porsche1,
                  year: 1931,
                  title: "Porsche",
                  description:
                    "Porsche's history began in 1931 when Ferdinand Porsche founded the company 'Dr. Ing. h. c. F. Porsche GmbH' in Stuttgart, Germany. Initially, the firm focused on vehicle development and consulting rather than manufacturing cars under its own name. The first significant project was the design of the Volkswagen Beetle, which became one of the most successful car designs in history. After World War II, Ferdinand's son, Ferry Porsche, took the reins and introduced the first car to carry the Porsche name—the Porsche 356—in 1948. This model marked the beginning of Porsche's legacy as a manufacturer of high-performance sports cars.",
                }}
                section={[
                  {
                    type: "right-text",
                    image: porsche2,
                    header: "Technological Innovations",
                    paragraph1:
                      "Porsche has always been at the forefront of automotive technology. The brand pioneered various innovations, such as the introduction of turbocharging in production vehicles and advanced aerodynamics in sports car design. The 911 Turbo, launched in 1974, was one of the first production cars to feature a turbocharged engine, setting a new standard for performance.",
                    paragraph2:
                      "Furthermore, Porsche has embraced hybrid technology with models like the Panamera E-Hybrid and Taycan, showcasing its commitment to sustainability while maintaining high performance.",
                  },
                  {
                    type: "left-text",
                    image: porsche3,
                    header: "Luxury and Customization",
                    paragraph1:
                      "Porsche vehicles are synonymous with luxury and personalization. The brand offers a wide range of customization options through its Exclusive Manufaktur program, allowing customers to tailor their vehicles to their specific tastes and preferences.",
                    paragraph2:
                      "From bespoke interior materials to unique paint finishes, this level of personalization reinforces Porsche's commitment to providing an exceptional ownership experience that reflects individual style.",
                  },
                  {
                    type: "mobile",
                    image: porsche4,
                    header: "Global Influence and Future Directions",
                    paragraph1:
                      "Today, Porsche is a global brand with a strong presence in markets around the world. Its vehicles are celebrated not only for their performance but also for their distinctive design and engineering excellence. The brand continues to expand its lineup while maintaining a focus on quality craftsmanship and innovative technology. As a result, Porsche has cultivated a loyal customer base that values both tradition and modernity.",
                    paragraph2:
                      "Looking ahead, Porsche is committed to evolving with changing automotive trends while staying true to its roots. The company is investing heavily in electric mobility and aims to have over half of its sales come from electric or hybrid vehicles by 2025. This strategic shift reflects a broader industry trend toward sustainability without compromising on performance—a hallmark of the Porsche brand since its inception. As it navigates this transition, Porsche remains dedicated to delivering thrilling driving experiences that resonate with enthusiasts worldwide.",
                  },
                ]}
              />
            }
          />
          <Route
            path="/violet-car"
            element={
              <CarSubPage
                color="violet"
                mainInfo={{
                  image: lamborghini1,
                  year: 1963,
                  title: "Lamborghini",
                  description:
                    "Lamborghini's journey began in 1963 when Ferruccio Lamborghini, a successful Italian entrepreneur, founded Automobili Lamborghini S.p.A. in Sant'Agata Bolognese. Initially, Ferruccio was a tractor manufacturer who sought to create a refined grand touring car to compete with established brands like Ferrari. The company's first model, the 350 GT, debuted in 1964 and marked the beginning of Lamborghini's reputation for producing high-performance sports cars. The Miura, introduced in 1966, further solidified Lamborghini's status in the automotive world by establishing the rear mid-engine layout as the standard for high-performance vehicles, captivating enthusiasts and collectors alike.",
                }}
                section={[
                  {
                    type: "right-text",
                    image: lamborghini2,
                    header: "Technological Innovations",
                    paragraph1:
                      "Lamborghini has always been at the forefront of automotive technology, consistently incorporating cutting-edge innovations into its vehicles. The brand is known for its use of lightweight materials such as carbon fiber, which enhances performance without compromising safety. Additionally, Lamborghini has embraced advancements in aerodynamics and engine technology, resulting in vehicles that deliver exhilarating speed and handling.",
                    paragraph2:
                      "The introduction of all-wheel drive systems in models like the Gallardo and Huracán has further improved traction and stability, allowing drivers to experience the full potential of these high-performance machines.",
                  },
                  {
                    type: "left-text",
                    image: lamborghini3,
                    header: "Luxury and Customization",
                    paragraph1:
                      "Lamborghini vehicles are synonymous with luxury and exclusivity, offering customers an unparalleled level of personalization. Through its Ad Personam program, Lamborghini allows buyers to customize nearly every aspect of their vehicle, from exterior colors to interior materials and finishes.",
                    paragraph2:
                      "This emphasis on bespoke craftsmanship ensures that each Lamborghini is not only a high-performance machine but also a reflection of its owner's style and personality. The attention to detail in both design and manufacturing processes underscores Lamborghini's commitment to delivering an exceptional ownership experience.",
                  },
                  {
                    type: "mobile",
                    image: lamborghini4,
                    header: "Motorsport Heritage and Global Influence",
                    paragraph1:
                      "Motorsport has played a crucial role in shaping Lamborghini's identity and engineering prowess. The brand has participated in various racing disciplines, including GT racing and endurance events. Lamborghini's commitment to motorsport not only enhances its reputation but also serves as a testing ground for new technologies that eventually make their way into production vehicles. The success of the Lamborghini Super Trofeo series showcases the brand's dedication to racing while providing customers with an opportunity to experience the thrill of competition behind the wheel of a Lamborghini.",
                    paragraph2:
                      "Today, Lamborghini is recognized as one of the leading luxury automotive brands globally. Its distinctive designs and powerful performance have garnered a dedicated following among car enthusiasts and collectors alike. The brand continues to expand its presence in emerging markets while maintaining its roots in Italian craftsmanship and engineering excellence. As Lamborghini evolves, it remains committed to producing vehicles that embody the spirit of innovation and performance that has defined the brand since its inception.",
                  },
                ]}
              />
            }
          />
        </Routes>
      </Router>
    );
  }
}

export default App;
