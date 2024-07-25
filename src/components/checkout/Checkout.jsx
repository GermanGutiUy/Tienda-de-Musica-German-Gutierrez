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
    const [datosForm, setDatosForm] = useState({
        nombre: "",
        telefono: "",
        email: ""
    });

    const [idOrden, setIdOrden] = useState(null);
    const [fechaHora, setFechaHora] = useState("");
    const [ordenDetalle, setOrdenDetalle] = useState([]);

    const guardarDatosImput = (event) => {
        setDatosForm({ ...datosForm, [event.target.name]: event.target.value });
    };

    const enviarOrden = async (event) => {
        if (event) event.preventDefault();
        const dataForm = { ...datosForm, repetirEmail: datosForm.email };

        const response = await validateForm(dataForm);
        if (response.status === "success") {
            const now = new Date();
            const orden = {
                comprador: datosForm,
                productos: carrito,
                total: precioTotal(),
                fechaHora: now.toLocaleString()
            };
            subirOrden(orden);
        } else {
            toast.warning(response.message);
        }
    };

    const subirOrden = (orden) => {
        const ordenesRef = collection(db, "ordenes");
        addDoc(ordenesRef, orden)
            .then((respuesta) => {
                setIdOrden(respuesta.id);
                setFechaHora(orden.fechaHora);
                setOrdenDetalle(orden.productos);
                setDatosForm({
                    nombre: "",
                    telefono: "",
                    email: ""
                });
            })
            .finally(() => {
                vaciarCarrito();
            });
    };

    return (
        <div className="checkoutContainer">
            {idOrden ? (
                <div className="orderSummary">
                    <h2>Orden enviada con éxito</h2>
                    <p>Guarde el id de su orden: <strong>{idOrden}</strong></p>
                    <p>Fecha y hora de la orden: <strong>{fechaHora}</strong></p>
                    <h3>Detalles del pedido:</h3>
                    <ul className="orderDetails">
                        {ordenDetalle.map((producto) => (
                            <li key={producto.id}>
                                {producto.nombre} - ${producto.precio} x {producto.cantidad}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <Formulario datosFrom={datosForm} guardarDatosImput={guardarDatosImput} enviarOrden={enviarOrden} />
            )}
        </div>
    );
};

export default Checkout;
