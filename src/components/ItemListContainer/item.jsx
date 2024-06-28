import React from 'react'
import { Link } from 'react-router-dom'

const item = ({ prodcuto }) => {
  return (
    <Link to = {"/detalle/" + prodcuto.id} className = "item">
        <img src={prodcuto.imagen} width = {200} alt =""/>
        <div className='descriptiocn-item'>
          <p>{prodcuto.nombre}</p>
          <p>${prodcuto.precio}</p>
        </div>
    </Link>
  )
}

export default item

// <Link to={"/detalle/" + prodcuto.id}>Ver detalles</Link>