import React from 'react';
import CardWidget from './CardWidget'; // Import Foto del carrito de compras
import Logo from "../img/Logo.jpg"; // Import Foto del logo
import "../styles/NavBar.css"

const NavBar = () => {
  return (
    <nav className='NavBar'>
      <div className='band'>
        <img width={200} src={Logo} alt="Logo" />
      </div>
      <ul>
        <li>Cuerda</li>
        <li>Viento</li>
        <li>Percusion</li>
        <li>Audio Pro</li>
        <li>Blog</li>
      </ul>
      <CardWidget />
    </nav>
  );
}

export default NavBar;