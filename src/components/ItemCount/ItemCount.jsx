import React, { useState } from 'react';
import ContadorLogic from './contadorLogic';

const ItemCount = ({ agregarAlCarrito }) => {
  const [contador, setContador] = useState(0);

  // Aumento de contador
  const aumentarContador = () => {
    if (contador < 10) // Agregar el stock máximo
      setContador(contador + 1);
  };

  // Disminuyo de contador
  const disminuirContador = () => {
    if (contador > 0)
      setContador(contador - 1);
  };

  return (
    <div>
      <ContadorLogic contador={contador} aumentarContador={aumentarContador} disminuirContador={disminuirContador} />
      <button onClick={() => agregarAlCarrito(contador)}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
