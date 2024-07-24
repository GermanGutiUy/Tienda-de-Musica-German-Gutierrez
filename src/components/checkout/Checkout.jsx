import React, { useState, useContext } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

import db from "../../db/db";
import Formulario from "./Formulario";
import { CartContext } from "../../context/CartContext";
import validateForm from '../utils/validacionFormulario';

import './checkout.css';

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

    const enviarOrden = async (event) => {
        if (event) event.preventDefault(); // Evita errores si el evento no está presente
        // Formateo al orden
        const datos = {
            comprador: { ...datosFrom },
            productos: [...carrito],
            total: precioTotal()
        };

        //Validacion de datos de la orden
        const response = await validateForm(datosFrom);
        if (response.status === "success") {
            subirOrden(datos);
        } else {
            toast.warning(response.message);
        }
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
