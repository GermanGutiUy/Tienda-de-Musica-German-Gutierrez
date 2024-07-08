import React from 'react'
import { useState, useEffect } from 'react'
import {obtenerProductos} from "../../data/data.js"
import ItemDetail from './ItemDetail.jsx'
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const [producto, serProducto] = useState({})

    const { idProducto } = useParams()

    useEffect (() =>{
        obtenerProductos()
        .then((data) =>  {
            const productoFiltrado = data.find((productoData) => productoData.id === idProducto)
            serProducto (productoFiltrado)
        })
    }, [])



  return (
    <ItemDetail producto = {producto} />
  )
}

export default ItemDetailContainer
