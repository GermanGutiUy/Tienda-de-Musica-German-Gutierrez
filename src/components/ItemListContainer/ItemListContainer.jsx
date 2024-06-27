import React from 'react'
import { obtenerProductos } from "../../data/data.js" // Importo data
import { useState, useEffect } from 'react';
import ItemList from "../ItemListContainer/itemList.jsx"
import useLoading from '../hooks/useLoading.jsx';
import loading from './loading.jsx'; 
import { useParams } from 'react-router-dom';
import "./itemlistcontainer.css"
//import { getProducts,getProductsById, addProduct, modProdcut } from "../utils/fetchApi.js" | Funcion para base de datos en apis


const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    const {idCategoria} = useParams ()

    const {isLoading, showLoading,hideLoading} = useLoading()


    useEffect (() => {
      
      //Mostrar pantalla de carga
      showLoading()

        obtenerProductos()
        .then((respuesta) => {
          if (idCategoria) {
            //filtar los productos por categoria
            const prodcutosFIltados = respuesta.filter((prodcuto) => prodcuto.categoria === idCategoria)
            serProdcutos(prodcutosFIltados)
          }else{
            //guardar toda la lista de producto
            setProductos(respuesta);
          }
        })
        .catch((erros) => {
          console.log(error);
        })
        .finally(() => {
          //Oculaar pantalla de carga
          hideLoading()
        });
      },[idCategoria]);



      return (
        <div classname = "itemlistcontainer">
          {isloading ?  <loading />: <ItemList productos = {productos} />}
          <ItemList prodcutos = {productos} />
        </div>
    );
};

export default ItemListContainer
