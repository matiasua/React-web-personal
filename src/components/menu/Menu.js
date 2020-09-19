import React from "react";
import { NavLink } from "react-router-dom";
//import './Menu.css';

class Menu extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light fixed-top  p-3 mb-2 bg-info text-dark">
        <a className="navbar-brand" href="#">
          <img
            alt="Logo"
            className="logo"
            src="https://firebasestorage.googleapis.com/v0/b/web-personal-acdd1.appspot.com/o/instantlogosearch-fila.png?alt=media&token=fb1de559-af22-428c-9385-6361c3413fb3"
          ></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/nosotros" className="nav-link">
                Nosotros
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/servicios" className="nav-link">
                Servicios
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contacto" className="nav-link">
                Contacto
              </NavLink>
            </li>
          </ul>

          <form className="form-inline mt-2 mt-md-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Buscar"
              aria-label="Buscar"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Buscar
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

export default Menu;
