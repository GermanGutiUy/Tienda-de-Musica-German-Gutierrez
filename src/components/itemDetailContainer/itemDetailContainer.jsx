import React from 'react'
import { useState, useEffect } from 'react'
import {obtenerProductos} from "../../data/data.js"
import itemDetail from './itemDetail.jsx'
import { useParams } from 'react-router-dom'

const itemDetailContainer = () => {
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
    <itemDetail producto = {producto} />
  )
}

export default itemDetailContainer
