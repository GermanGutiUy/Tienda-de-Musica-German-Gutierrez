import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './Carrito.css';
import { Link } from 'react-router-dom';
import Checkout from "../checkout/Checkout"

const Carrito = () => {
  const { carrito, borrarProductoPorId, vaciarCarrito, precioTotal } = useContext(CartContext);

  // Early return, return temprano
  if (carrito.length === 0) {
    return (
      <div className='divCarritoVacio'>
        <h2> No hay productos en el carrito </h2>
        <Link to="/">Home</Link>
      </div>
    )
  }

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
      <Link to= "/checkout">Terminar compra</Link>
    </div>
  );
};

export default Carrito;
