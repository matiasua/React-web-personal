import React from "react";

export default class Formulario extends React.Component {
  render() {
    return (
      <form className="mb-5">
        <div className="form-group">
          <label className="negrita" htmlFor="nameylast">
            Nombres y Apellidos
          </label>
          <input type="text" className="form-control" id="nameylast" required />
        </div>

        <div className="form-group">
          <label className="negrita" htmlFor="email">
            Email
          </label>
          <input type="email" className="form-control" id="email" required />
        </div>

        <div className="form-group">
          <label className="negrita" htmlFor="asunto">
            Asunto
          </label>
          <input type="text" className="form-control" id="asunto" required />
        </div>

        <div className="form-group">
          <label className="negrita" htmlFor="mensaje">
            Mensaje
          </label>
          <textarea className="form-control" id="mensaje" required />
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    );
  }
}
