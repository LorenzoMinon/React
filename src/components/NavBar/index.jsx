import React from 'react';
import './styles.css'; // por si hace falta añadir estilos personalizados

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Revolution Pharma</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Características</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Precios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">Desactivado</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
