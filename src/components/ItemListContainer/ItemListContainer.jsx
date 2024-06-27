import React from 'react'
import { obtenerProductos } from "../../data/data.js" // Importo data
import { useState, useEffect } from 'react';
import ItemList from "../ItemListContainer/itemList.jsx"
import useLoading from '../hooks/useLoading.jsx';
import loading from './loading.jsx'; 
import "./itemlistcontainer.css"
//import { getProducts,getProductsById, addProduct, modProdcut } from "../utils/fetchApi.js" | Funcion para base de datos en apis


const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    const {isLoading, showLoading,hideLoading} = useLoading()

    useEffect (() => {
      
      //Mostrar pantalla de carga
      showLoading()

        obtenerProductos()
        .then((respuesta) => {
          setProductos(respuesta);
        })
        .catch((erros) => {
          console.log(error);
        })
        .finally(() => {
          //Oculaar pantalla de carga
          hideLoading()
        });
      },[]);
      return (
        <div classname = "itemlistcontainer">
          {isloading ?  <loading />: <ItemList productos = {productos} />}
        </div>
    );
};

export default ItemListContainer
