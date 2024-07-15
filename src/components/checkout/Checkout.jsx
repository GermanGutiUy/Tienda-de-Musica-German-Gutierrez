import React, { useState, useContext } from 'react';
import Formulario from "./Formulario";
import { CartContext } from "../../context/CartContext"; // Asegúrate de que el nombre del archivo y la exportación sean correctos
import db from "../../db/db";
import { collection, addDoc } from 'firebase/firestore';

const Checkout = () => {
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
    const [datosFrom, setDatosForm] = useState({
        nombre: "",
        telefono: "",
        email: ""
    });

    const [idOrden, setIdOrden] = useState(null);

    const guardarDatosImput = (event) => {
        setDatosForm({ ...datosFrom, [event.target.name]: event.target.value });
    };

    const enviarOrden = (event) => {
        event.preventDefault();
        // Formateo al orden
        const datos = {
            comprador: { ...datosFrom },
            productos: [...carrito],
            total: precioTotal()
        };
        subirOrden(datos);
    };

    const subirOrden = (datos) => {
        const ordenesRef = collection(db, "ordenes");
        addDoc(ordenesRef, datos)
            .then((respuesta) => {
                setIdOrden(respuesta.id);
            })
            .finally(() => {
                vaciarCarrito();
            });
    };

    return (
        <div>
            {idOrden ? (
                <div>
                    <h2>Orden enviada con éxito</h2>
                    <p>Guarde el id de su orden: {idOrden}</p>
                </div>
            ) : (
                <Formulario datosFrom={datosFrom} guardarDatosImput={guardarDatosImput} enviarOrden={enviarOrden} />
            )}
        </div>
    );
};

export default Checkout;
