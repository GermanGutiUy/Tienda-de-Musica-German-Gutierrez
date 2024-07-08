import React from 'react'
import { useState, useEffect } from 'react'
import {obtenerProductos} from "../../data/data.js"
import ItemDetail from './ItemDetail.jsx'
import { useParams } from 'react-router-dom'
import useLoading from '../hooks/useLoading.jsx';
import Loading from '../ItemListContainer/loading.jsx'; 
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const [producto, serProducto] = useState({})

    const { idProducto } = useParams()

    const { isLoading, showLoading, hideLoading } = useLoading(); //aca

    useEffect (() =>{
       // Mostrar pantalla de carga
       showLoading();

        obtenerProductos()
        .then((data) =>  {
            const productoFiltrado = data.find((productoData) => productoData.id === idProducto)
            serProducto (productoFiltrado)
        })
        .finally(() => {
          // Ocultar pantalla de carga
          hideLoading();
      });
    }, [])



  return (
    <div className="itemlistcontainer">
    {isLoading ? <Loading /> : <ItemDetail producto = {producto} />}
    </div>


  )
}

export default ItemDetailContainer
