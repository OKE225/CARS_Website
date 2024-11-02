import React, { Component } from "react";

export default class PageHeroDescription extends Component {
  render() {
    return (
      <div className="content-green-container">
        <header>
          <h4 className="year">1931</h4>
          <h2 className="title">Porsche</h2>
        </header>
        <div className="content">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
            iure omnis quasi, eveniet, placeat, recusandae voluptates assumenda
            in quia dolorem a? Rerum fugiat odio architecto provident fugit a
            nesciunt ratione dolorum molestias iusto, atque quo totam quod
            dolores corporis vitae quibusdam consectetur sunt. Animi fugit ad
            quae consectetur alias aspernatur nulla odit autem quod totam
            deleniti ipsum odio dolorem, beatae natus assumenda minima
            asperiores officiis. Repudiandae necessitatibus sequi vel adipisci
            tempore! Provident cumque hic autem.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
            qui quis voluptas ut officiis nobis alias error cumque placeat
            porro, ea labore fugiat mollitia optio accusantium nesciunt! Fugit
            tempora vitae ad et porro voluptates repellat. Ducimus, dignissimos
            eius doloribus exercitationem laborum repellat voluptas maiores
            necessitatibus magni a? Voluptates hic aut, id ab repellendus
            veritatis possimus veniam quia, itaque voluptate delectus?
          </p>
        </div>
        <div className="corners">
          <span className="square"></span>
          <span className="square"></span>
          <span className="square"></span>
          <span className="square"></span>
        </div>
      </div>
    );
  }
}
