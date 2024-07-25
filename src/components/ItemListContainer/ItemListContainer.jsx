import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';

import db from "../../db/db.js"
import ItemList from "../ItemListContainer/itemList.jsx";
import useLoading from '../hooks/useLoading.jsx';
import Loading from './loading.jsx';
//import { getProducts,getProductsById, addProduct, modProduct } from "../utils/fetchApi.js" | Funcion para base de datos en apis

import "./itemlistcontainer.css";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    const { idCategoria } = useParams();

    const { isLoading, showLoading, hideLoading } = useLoading();

    const obtenerProductos = () => {
        const productosRef = collection( db, "productos")
        getDocs(productosRef)
            .then((respuesta) => {
                const data = respuesta.docs.map((productDb) => {
                    return { id: productDb.id, ...productDb.data() }
                })
                setProductos(data)
            })
    }
    
    const obtenerProductosFiltrados = () => {
        const productosRef = collection(db, "productos")
        const q = query(productosRef, where("categoria", "==", idCategoria))
        getDocs(q)
            .then((respuesta) => {
                return { id: productDb.id, ...productDb.data() };
            });
            setProductos(data)
        }

    useEffect(() => {

        if (idCategoria) {
            obtenerProductosFiltrados()
        } else {
            obtenerProductos();
        }

        obtenerProductos()

    }, [idCategoria]);

    return (
        <div className="itemlistcontainer">
            {isLoading ? <Loading /> : <ItemList productos={productos} />}
        </div>
    );
};

export default ItemListContainer;