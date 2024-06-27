import React from 'react'
import { obtenerProductos } from "../../data/data.js" // Importo data
import { useState, useEffect } from 'react';
import ItemList from "../ItemListContainer/itemList.jsx"
import { getProductsById } from '../utils/fetchApi.js';
//import { getProducts,getProductsById, addProduct, modProdcut } from "../utils/fetchApi.js" | Funcion para base de datos en apis

const ItemListContainer = () => {
    const [prodcutos, setProductos] = useState([]);

    useEffect (() => {
        getProducts()
            .then((data) => setProductos (data))

            getProductsById(idProduct)
                .then((data) => console.log(data))
    }, []);
  return (
    <div className = "itemlistcontainer">
      <ItemList productos = {prodcutos} />
    </div>
  )
}

export default ItemListContainer
