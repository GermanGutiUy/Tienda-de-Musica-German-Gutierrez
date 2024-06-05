import './navbar.css'
import React from 'react'
import CardWidget from './CardWidget' //Foto del carrito de compras de ReactIcon
import Logo from "../img/Logo.jpg"

const navbar = () => {
  return (
          <nav className='navbar'>
        <div className='brand'>
            <img width={200} src={ Logo } alt="" />
        </div>
        <ul>{/* // Lista a agregar */}
            <li>Cuerda</li>
            <li>Viento</li>
            <li>Percusion</li>
            <li>Audio Pro</li>
            <li>Blog</li>
            <li>Contacto</li>
        </ul>
        <CardWidget /> {/*CardWidget Dentro del Nav */}

        <NavBar />
    </nav>
  )
}

export default navbar

