import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({producto}) => {
  return (
    <div>
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcionLargo}</p>
      <img src ={producto.imagen} alt={producto.nombre} />
    </div>
  )
}

export default ItemDetail
