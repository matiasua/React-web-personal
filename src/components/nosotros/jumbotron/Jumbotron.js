import React from "react";

export default class Jumbotron extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          <h1 className="display-3"> Nosotros </h1>
          <p>
            Soy una pagina web realizada en React Js con componentes de
            bootstrap
            <br />
            Solo de esta manera, con practica se puede mejorar tu forma de
            desarrollar
          </p>
          <p>
            <a
              type="button"
              href="https://www.uautonoma.cl"
              className="btn btn-primary btn-lg"
              target="_blank"
            >
              Visitar Web
            </a>
          </p>
        </div>
      </div>
    );
  }
}
