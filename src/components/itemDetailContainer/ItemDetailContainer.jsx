import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';

import db from "../../db/db.js";
import ItemDetail from './ItemDetail.jsx';
import useLoading from '../hooks/useLoading.jsx';
import Loading from '../ItemListContainer/loading.jsx';

import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null); // Cambia el estado inicial a null
  const [error, setError] = useState(null); // Añade un estado para manejar errores
  const { idProducto } = useParams();
  const navigate = useNavigate(); // Usa useNavigate para redirigir

  const obtenerProducto = async () => {
    try {
      const docRef = doc(db, "productos", idProducto);
      const respuesta = await getDoc(docRef);
      if (!respuesta.exists()) {
        throw new Error('Producto no encontrado'); // Manejo el caso de producto no encontrado
      }
      const data = { id: respuesta.id, ...respuesta.data() };
      setProducto(data);
    } catch (error) {
      setError(error.message);
    }
  };

  const { isLoading, showLoading, hideLoading } = useLoading();

  useEffect(() => {
    showLoading(); // Muestra el loading al iniciar la carga
    obtenerProducto()
      .then(() => hideLoading()) // Oculta el loading después de la carga
      .catch(() => hideLoading()); // Oculta el loading en caso de error
  }, [idProducto]);

  useEffect(() => {
    if (error) {
      navigate('/error'); // Redirige a la página de error si hay un error
    }
  }, [error, navigate]);

  if (isLoading) {
    return <Loading />;
  }

  if (!producto) {
    return null; // No renderiza nada mientras espera la redirección
  }

  return (
    <div className="itemlistcontainer">
      <ItemDetail producto={producto} />
    </div>
  );
};

export default ItemDetailContainer;
