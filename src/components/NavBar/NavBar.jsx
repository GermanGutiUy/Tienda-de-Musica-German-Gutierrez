import React from 'react';
import { Link } from "react-router-dom";

import CardWidget from './CardWidget'; // Import Foto del carrito de compras
import Logo from "../../img/Logo.jpg"; // Import Foto del logo

import './NavBar.css';

const NavBar = () => {
  return (
    <nav className='NavBar'>
      <Link to="/" className='brand'>
        <img width={100} src={Logo} alt="Logo" />
      </Link>

      <ul className='navLinks'>
        <li>
          <Link to="/categoria/cuerda" className="category">
            <p>Cuerda</p>
            <div className="img-category">
              <img src="" alt="" />
            </div>
          </Link>
        </li>

        <li>
          <Link to="/categoria/viento" className="category">
            <p>Viento</p>
            <div className="img-category">
              <img src="" alt="" />
            </div>
          </Link>
        </li>

        <li>
          <Link to="/categoria/percusion" className="category">
            <p>Percusion</p>
            <div className="img-category">
              <img src="" alt="" />
            </div>
          </Link>
        </li>

        <li>
          <Link to="/categoria/audiopro" className="category">
            <p>Audio Pro</p>
            <div className="img-category">
              <img src="" alt="" />
            </div>
          </Link>
        </li>
      </ul>

      <CardWidget />
    </nav>
  );
}

export default NavBar;
