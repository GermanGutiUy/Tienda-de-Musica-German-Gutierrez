import React from 'react'
import { useState, useEffect } from 'react'
import {obtenerProductos} from "../../data/data.js"
import itemDetail from './itemDetail.jsx'
import { useParams } from 'react-router-dom'

const itemDetailContainer = () => {
    const [producto, serProducto] = useState({})

    const { idProdcuto } = useParams()

    useEffect (() =>{
        obtenerProductos()
        .then((data) =>  {
            const productoFiltrado = data.find((prodcutoData) => prodcutoData.id === idProdcuto)
            serProducto (productoFiltrado)
        })
    }, [])



  return (
    <itemDetail producto = {producto} />
  )
}

export default itemDetailContainer
