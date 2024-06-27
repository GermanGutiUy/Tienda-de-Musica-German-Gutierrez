import React from 'react';
import CardWidget from './CardWidget'; // Import Foto del carrito de compras
import Logo from "../../img/Logo.jpg"; // Import Foto del logo
import './NavBar.css'
import {  Link  } from "react-router-dom"

const NavBar = () => {
  return (

    <nav className='NavBar'>
      <Link  to = "/"className='band'>
        <img width={100} src={Logo} alt="Logo" />
      </Link>


      <ul>
        <Link to = "/categoria/cuerda" className = "category">
          <p>Cuerda</p>
        <div className = "img-category">
          <img 
            src = ""
            alt = ""
            />
        </div>
        </Link>

        <Link to = "/categoria/viento" className = "category">
          <p>Viento</p>
        <div className = "img-category">
          <img 
            src = ""
            alt = ""
            />
        </div>
        </Link>

        <Link to = "/categoria/percusion" className = "category">
          <p>Percusion</p>
        <div className = "img-category">
          <img 
            src = ""
            alt = ""
            />
        </div>
        </Link>
        
        <Link to = "/categoria/audiopro" className = "category">
          <p>Audio Pro</p>
        <div className = "img-category">
          <img 
            src = ""
            alt = ""
            />
        </div>
        </Link>

        <Link to = "/categoria/blog" className = "category">
          <p>Blog</p>
        <div className = "img-category">
          <img 
            src = ""
            alt = ""
            />
        </div>
        </Link>
      </ul>
      <CardWidget />
    </nav>
  );
}

export default NavBar;