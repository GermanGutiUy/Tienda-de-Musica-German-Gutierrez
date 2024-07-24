import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import './item.css'

const item = ({ producto }) => {
  const [expandir, setExpandir] = useState(false)

  //fuincion del evento cuando el mouse esta encima de la card
  const handleMouseOver = () => {
    setExpandir(true)
  }

  //fuincion del evento cuando el mouse esta fuera de la card
  const handleMouseLeave = () => {
    setExpandir(false)
  }

  const estilosCard = {
    transform: expandir ? 'scale(1.1)' : 'scale(1)',
    transition: 'transform 0.2s ease-in-out'
  }

  return (
    <Link
      to={"/detalle/" + producto.id}
      className="item"
      style={estilosCard}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <img src={producto.imagen} width={200} alt={producto.nombre} />
      <div className='description-item'>
        <p>{producto.nombre}</p>
        <p>${producto.precio}</p>
      </div>
    </Link>
  )
}

export default item

// <Link to={"/detalle/" + producto.id}>Ver detalles</Link>
