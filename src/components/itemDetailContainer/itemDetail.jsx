import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount.jsx'
import { CartContext } from '../../context/CartContex.jsx'
import { useContext } from 'react'

const ItemDetail = ({producto}) => {

  const { addItem } = useContext (CartContext)

  const agregarAlCarrito = (contador) => {
    const productoCarrito= {
      ...producto,
      cantidad: contador
      
    }
    addItem(productoCarrito)
      
  }

  return (
    <div>
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcionLargo}</p>
      <img src ={producto.imagen} alt={producto.nombre} />
      <ItemCount agregarAlCarrito = {agregarAlCarrito} stock = {producto.stock}/>
    </div>
  )
}

export default ItemDetail
