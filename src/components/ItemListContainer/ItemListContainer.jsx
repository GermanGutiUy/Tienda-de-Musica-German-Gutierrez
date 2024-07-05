import React from 'react';
import { obtenerProductos } from "../../data/data.js"; // Importo data
import { useState, useEffect } from 'react';
import ItemList from "../ItemListContainer/itemList.jsx";
import useLoading from '../hooks/useLoading.jsx';
import Loading from './loading.jsx'; 
import { useParams } from 'react-router-dom';
import "./itemlistcontainer.css";
//import { getProducts,getProductsById, addProduct, modProdcut } from "../utils/fetchApi.js" | Funcion para base de datos en apis

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    const { idCategoria } = useParams();

    const { isLoading, showLoading, hideLoading } = useLoading();

    useEffect(() => {
        // Mostrar pantalla de carga
        showLoading();

        obtenerProductos()
        .then((respuesta) => {
            if (idCategoria) {
                // Filtrar los productos por categoria
                const productosFiltrados = respuesta.filter((producto) => producto.categoria === idCategoria);
                setProductos(productosFiltrados);
            } else {
                // Guardar toda la lista de productos
                setProductos(respuesta);
            }
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            // Ocultar pantalla de carga
            hideLoading();
        });
    }, [idCategoria]);

    return (
        <div className="itemlistcontainer">
            {isLoading ? <Loading /> : <ItemList productos={productos} />}
        </div>
    );
};

export default ItemListContainer;