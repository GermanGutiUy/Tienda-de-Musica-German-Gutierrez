import React from 'react'
import { useState, useEffect } from 'react'
import {obtenerProductos} from "../../../data/data.js"
import itemDetail from './itemDetail.jsx'

const itemDetailContainer = () => {
    const [producto, serProducto] = useState({})

    useEffect (() =>{
        obtenerProductos()
        .then((data) =>  {
            const productoFiltrado = data.find((prodcutoData) => prodcutoData.id === "asd")
            serProducto (productoFiltrado)
        })
    }, [])



  return (
    <itemDetail producto = {producto} />
  )
}

export default itemDetailContainer
