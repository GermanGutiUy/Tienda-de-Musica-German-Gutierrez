import React, { useState } from 'react';

import ContadorLogic from './contadorLogic';

import './ItemCount.css'

const ItemCount = ({ agregarAlCarrito, stock }) => {
  const [contador, setContador] = useState(0);

  // Aumento de contador
  const aumentarContador = () => {
    if (contador < stock) // Agregar el stock máximo
      setContador(contador + 1);
  };

  // Disminuyo de contador
  const disminuirContador = () => {
    if (contador > 0)
      setContador(contador - 1);
  };

  return (
    <div className="itemCountContainer">
      <button className="counterButton" onClick={disminuirContador}>-</button>
      <span className="counterDisplay">{contador}</span>
      <button className="counterButton" onClick={aumentarContador}>+</button>
      <button className="addToCartButton" onClick={() => agregarAlCarrito(contador)}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
