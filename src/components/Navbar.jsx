import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png'; // Importa tu logotipo
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  if (['/articulo1', '/articulo2', '/articulo3'].includes(location.pathname)) {
    return null; // No renderizar el Navbar en estas rutas
  }
  

  return (
    <nav className={`navbar ${isHome ? 'navbar-home' : 'navbar-other'}`}>
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Logo de la empresa" />
        </Link>
      </div>
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink to="/la-firma" className={isHome ? 'link-home' : 'link-other'} activeClassName="active">La Firma</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/servicios" className={isHome ? 'link-home' : 'link-other'} activeClassName="active">Servicios</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/casos-de-exito" className={isHome ? 'link-home' : 'link-other'} activeClassName="active">Casos de Éxito</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/articulos" className={isHome ? 'link-home' : 'link-other'} activeClassName="active">Artículos</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/area-clientes" className={isHome ? 'link-home' : 'link-other'} activeClassName="active">Área Clientes</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/talento" className={isHome ? 'link-home' : 'link-other'} activeClassName="active">Talento</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;



