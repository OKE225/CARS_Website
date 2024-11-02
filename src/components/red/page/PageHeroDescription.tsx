import React, { Component } from "react";

export default class PageHeroDescription extends Component {
  render() {
    return (
      <div className="content-red-container">
        <header>
          <h4 className="year">1938</h4>
          <h2 className="title">Ferrari</h2>
        </header>
        <div className="content">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
            illum architecto beatae delectus. Nisi sequi optio soluta. Explicabo
            quibusdam, officiis aperiam ratione vel corporis ut quod sit quis
            excepturi impedit porro laboriosam. Neque, omnis hic harum
            laboriosam beatae, voluptas sit mollitia, accusantium quisquam
            nostrum distinctio quo repellendus. Repellendus dolorum explicabo
            porro voluptas reprehenderit ab possimus distinctio? Dolor quidem
            quas veritatis enim reprehenderit dolorum sapiente vitae numquam,
            cupiditate velit dignissimos consequuntur animi sint tempore
            consectetur ipsam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
            maiores quisquam labore nemo corporis at nulla debitis dolorem.
            Porro deleniti unde ratione commodi dicta sit, quisquam repellat
            maiores id quasi animi neque nihil eveniet aspernatur illum
            obcaecati doloribus perspiciatis repellendus modi in. Laborum
            aperiam ducimus aut excepturi eum, explicabo totam cum omnis
            voluptate officia fuga molestiae illo culpa deserunt! Omnis!
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
