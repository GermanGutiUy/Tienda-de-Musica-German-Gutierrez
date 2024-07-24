import { createContext, useState } from "react";

//Creamos un contexto de react llamado CartContext
const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])

    const addItem = (producto) => {

        const condicion = estaEnElCarrito(producto.id)

        if (condicion) {
            //Sumar la cantidad nueva
            const productosModificados = carrito.map((productoCarrito) => {
                if (productoCarrito.id === producto.id) {
                    return { ...productoCarrito, cantidad: productoCarrito.cantidad + producto.cantidad }
                } else {
                    return productoCarrito
                }
            })

            setCarrito(productosModificados)

        } else {
            //agregar como producto nuevo
            setCarrito([...carrito, producto])
        }

    }
    const estaEnElCarrito = (idProducto) => {
        const condicion = carrito.some((producto) => producto.id === idProducto)
        return condicion
    }

    const cantidadTotal = () => {
        const cantidad = carrito.reduce((total, producto) => total + producto.cantidad, 0)
        return cantidad
    }

    //Devuelve el valor total de la cocmpra
    const precioTotal = () => {
        const precio = carrito.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0.00)
        return precio
    }

    //Elimino todos los elementos del carrito
    const vaciarCarrito = () => {
        setCarrito([])
    }

    //Elimino un elemento en especifico del carrito
    const borrarProductoPorId = (idProducto) => {
        const productosFiltrados = carrito.filter((productoCarrito) => productoCarrito.id !== idProducto)
        setCarrito(productosFiltrados)
    }

    return (
        <CartContext.Provider value={{ carrito, addItem, cantidadTotal, vaciarCarrito, borrarProductoPorId, precioTotal }}>
            {children}
        </CartContext.Provider>
    )
}
export { CartProvider, CartContext }
