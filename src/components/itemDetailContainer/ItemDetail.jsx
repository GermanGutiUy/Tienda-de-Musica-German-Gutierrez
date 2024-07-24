import React, { useContext } from 'react';

import ItemCount from '../ItemCount/ItemCount.jsx';
import { CartContext } from '../../context/CartContext.jsx';

import './ItemDetail.css';

const ItemDetail = ({ producto }) => {
  const { addItem } = useContext(CartContext);

  const agregarAlCarrito = (contador) => {
    const productoCarrito = {
      ...producto,
      cantidad: contador
    };
    addItem(productoCarrito);
  };

  return (
    <div className="itemDetailContainer">
      <h2>{producto.nombre}</h2>
      <div className="itemDetailContent">
        <img src={producto.imagen} alt={producto.nombre} />
        <p>{producto.descripcionLargo}</p>
      </div>
      <div className="itemCount">
        <ItemCount agregarAlCarrito={agregarAlCarrito} stock={producto.stock} />
      </div>
    </div>
  );
};

export default ItemDetail;
