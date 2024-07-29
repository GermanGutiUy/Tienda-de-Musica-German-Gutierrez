import React, { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ agregarAlCarrito, stock }) => {
  const [contador, setContador] = useState(1);

  const aumentarContador = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const disminuirContador = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  const handleAgregarAlCarrito = () => {
    agregarAlCarrito(contador);
    setContador(0); // Resetea el contador después de agregar al carrito
  };

  return (
    <div className="itemCountContainer">
      <button className="counterButton" onClick={disminuirContador}>-</button>
      <span className="counterDisplay">{contador}</span>
      <button className="counterButton" onClick={aumentarContador}>+</button>
      <button className="addToCartButton" onClick={handleAgregarAlCarrito}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
