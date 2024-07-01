import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const item = ({ prodcuto }) => {
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
    <Link to = {"/detalle/" + prodcuto.id} className = "item" style = {estilosCard} onMauseOver = {handleMouseOver} onMauseLeave = {handleMouseLeave}>
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