import React from "react";
import Menu from "../menu/Menu";
import Footer from "../footer/Footer";
import Jumbotron from "./jumbotron/Jumbotron";
import Detalles from "./detalles/Detalles";

class Nosotros extends React.Component {
  render() {
    return (
      <>
        <Menu />

        <main type="main" className="flex-shrink-0 mt-5">
          <Jumbotron />
          <Detalles />
        </main>

        <Footer />
      </>
    );
  }
}

export default Nosotros;
