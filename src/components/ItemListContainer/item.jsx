import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const item = ({ producto }) => {
  const [expandir, serExpandir] = useState(false)

  //fuincion manejadora del evento cuando el mouse esta encima de la card
  const handleMouseOver = () => {
    setExpandir(true)
  }

    //fuincion manejadora del evento cuando el mouse esta fuera de la card
    const handleMouseLeave = () => {
      setExpandir(false)
    }

    const estilosCard = {
      transform : expandir ? 'scale(1.1)' : 'scale(1)',
      transition: 'transform 0.3s ease-in-out'
    }
  

  return (
    <Link to = {"/detalle/" + producto.id} className = "item" style = {estilosCard} onMauseOver = {handleMouseOver} onMauseLeave = {handleMouseLeave}>
        <img src={producto.imagen} width = {200} alt =""/>
        <div className='descriptiocn-item'>
          <p>{producto.nombre}</p>
          <p>${producto.precio}</p>
        </div>
    </Link>
  )
}

export default item

// <Link to={"/detalle/" + producto.id}>Ver detalles</Link>