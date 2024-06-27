import React from 'react'
import { Link } from 'react-router-dom'

const item = ({ prodcuto }) => {
  return (
    <div>
        <img src={prodcuto.imagen} width = {200} alt =""/>
        <div className='descriptiocn-item'>
          <p>{prodcuto.nombre}</p>
          <p>${prodcuto.precio}</p>

          <Link to={"/detalle/" + prodcuto.id}>Ver detalles</Link>

        </div>
    </div>
  )
}

export default item
