import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContex';
import './Carrito.css';

const Carrito = () => {
  const { carrito, borrarProductoPorId, vaciarCarrito, precioTotal } = useContext(CartContext);

  return (
    <div className="CarritoContainer">
      {carrito.map((productoCarrito) => (
        <div key={productoCarrito.id} className='divCarrito'>
          <img src={productoCarrito.imagen} width={80} alt="" />
          <p>{productoCarrito.nombre}</p>
          <p>Precio unitario: ${productoCarrito.precio}</p>
          <p>Cantidad: {productoCarrito.cantidad}</p>
          <p>Total parcial: ${productoCarrito.precio * productoCarrito.cantidad}</p>
          <button onClick={() => borrarProductoPorId(productoCarrito.id)}>Eliminar</button>
        </div>
      ))}
      <p>Total total: $ {precioTotal()}</p>
      <button onClick={vaciarCarrito}>Vaciar carrito</button>
      <button>Terminar compra</button>
    </div>
  );
};

export default Carrito;
