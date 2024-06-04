import React from 'react'
import CardWidget from './CardWidget'

const navbar = () => {
  return (
          <nav className='navbar'>
        <div className='brand'>
            <img src="" alt="" />
        </div>
        <ul> // Lista a agregar
            <li>Cuerda</li>
            <li>Viento</li>
            <li>Percusion</li>
            <li>Audio Pro</li>
            <li>Blog</li>
            <li>Contacto</li>
            <li>Nosotros</li>
        </ul>
        <CardWidget /> //CardWidget Dentro del Nav

        <NavBar />
    </nav>
  )
}

export default navbar
