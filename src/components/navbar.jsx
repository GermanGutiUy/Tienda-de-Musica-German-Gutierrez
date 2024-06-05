import CardWidget from './CardWidget' //Import Foto del carrito de compras
import Logo from "../img/Logo.jpg" //Import Foto del logo
import React from 'react'

const navbar = () => {
  return (
<nav className='NavBar'>
  <div className='band'>
    <img width = {200} src={ Logo } alt="" />
  </div>
  <ul>
    <li>Cuerda</li>
    <li>Viento</li>
    <li>Percusion</li>
    <li>Audio Pro</li>
    <li>Blog</li>
  </ul>
    <CardWidget />
    <NavBar />
</nav>
  )
}

export default navbar