import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount.jsx'

const ItemDetail = ({producto}) => {

  const agregarAlCarrito = (contador) => {
    const prodcutoCarrito = {
      ...producto,
      cantidad: contador
      
    }
      
  }

  return (
    <div>
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcionLargo}</p>
      <img src ={producto.imagen} alt={producto.nombre} />
      <ItemCount agregarAlCarrito = {agregarAlCarrito}/>
    </div>
  )
}

export default ItemDetail
