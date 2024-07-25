import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';

import db from "../../db/db.js";
import ItemList from "../ItemListContainer/itemList.jsx";
import useLoading from '../hooks/useLoading.jsx';
import Loading from './loading.jsx';

import "./itemlistcontainer.css";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const { idCategoria } = useParams();
    const { isLoading, showLoading, hideLoading } = useLoading();

    const obtenerProductos = async () => {
        showLoading();
        try {
            const productosRef = collection(db, "productos");
            const respuesta = await getDocs(productosRef);
            const data = respuesta.docs.map((productDb) => {
                return { id: productDb.id, ...productDb.data() };
            });
            setProductos(data);
        } finally {
            hideLoading();
        }
    };

    const obtenerProductosFiltrados = async () => {
        showLoading();
        try {
            const productosRef = collection(db, "productos");
            const q = query(productosRef, where("categoria", "==", idCategoria));
            const respuesta = await getDocs(q);
            const data = respuesta.docs.map((productDb) => {
                return { id: productDb.id, ...productDb.data() };
            });
            setProductos(data);
        } finally {
            hideLoading();
        }
    };

    useEffect(() => {
        if (idCategoria) {
            obtenerProductosFiltrados();
        } else {
            obtenerProductos();
        }
    }, [idCategoria]);

    return (
        <div className="itemlistcontainer">
            {isLoading ? <Loading /> : <ItemList productos={productos} />}
        </div>
    );
};

export default ItemListContainer;