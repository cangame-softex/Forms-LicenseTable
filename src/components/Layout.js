// Layout.js

import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logoCangame.png";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <header className="header">
        <img src={Logo} alt="Logo" className="logo" />
        <h1>Licenças</h1>
      </header>

      <div className="main-content">
        <aside className="sidebar">
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/formulario">
            <button>Cadastro de Contrato</button>
          </Link>
          <Link to="/license-table">
            <button>Controle de Licenças</button>
          </Link>
        </aside>

        {children}
      </div>

      <footer className="footer">
        <p> Copyright 2023 - Softex - Cangame</p>
      </footer>
    </div>
  );
};

export default Layout;
