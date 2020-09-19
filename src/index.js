import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";

import * as serviceWorker from "./serviceWorker";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; // Archivo CSS de Bootstrap 4
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"; // Archivo Javascript de Bootstrap 4

// Paginas Creadas
import Home from "./components/home/Home";
import Nosotros from "./components/nosotros/Nosotros";
import PageService from "./components/servicios/Servicios";
import Contacto from "./components/contacto/Contacto";

ReactDOM.render(
  <Router>
    <div>
      <Switch>
        {/* Paginas */}
        <Route exact path="/" component={Home} />
        <Route exact path="/nosotros" component={Nosotros} />
        <Route exact path="/servicios" component={PageService} />
        <Route exact path="/contacto" component={Contacto} />
      </Switch>
    </div>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
