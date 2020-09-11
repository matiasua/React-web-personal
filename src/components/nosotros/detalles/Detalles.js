import React from "react";

export default class Detalles extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2> Objetivo </h2>
            <p>
              Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
              tellus ac cursus commodo, tortor mauris condimentum nibh, ut
              fermentum massa justo sit amet risus. Etiam porta sem malesuada
              magna mollis euismod. Donec sed odio dui.
            </p>
            <p>
              <a
                type="button"
                className="btn btn-info"
                href="https://www.uautonoma.cl/"
              >
                Leer más &raquo;
              </a>
            </p>
          </div>
          <div className="col-md-4">
            <h2> Misión </h2>
            <p>
              Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
              tellus ac cursus commodo, tortor mauris condimentum nibh, ut
              fermentum massa justo sit amet risus. Etiam porta sem malesuada
              magna mollis euismod. Donec sed odio dui.
            </p>
            <p>
              <a
                type="button"
                className="btn btn-info"
                href="https://www.uautonoma.cl/"
              >
                Leer más &raquo;
              </a>
            </p>
          </div>
          <div className="col-md-4">
            <h2> Visión </h2>
            <p>
              Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
              tellus ac cursus commodo, tortor mauris condimentum nibh, ut
              fermentum massa justo sit amet risus. Etiam porta sem malesuada
              magna mollis euismod. Donec sed odio dui.
            </p>
            <p>
              <a
                type="button"
                className="btn btn-info"
                href="https://www.uautonoma.cl/"
              >
                Leer más &raquo;
              </a>
            </p>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}
