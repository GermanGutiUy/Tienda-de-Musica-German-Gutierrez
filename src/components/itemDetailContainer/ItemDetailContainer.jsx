import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore"

import db from "../../db/db.js"
import ItemDetail from './ItemDetail.jsx'
import useLoading from '../hooks/useLoading.jsx';
import Loading from '../ItemListContainer/loading.jsx';

import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({})

  const { idProducto } = useParams()

  const obtenerProducto = () => {
    const docRef = doc(db, "productos", idProducto)
    getDoc(docRef)
      .then((respuesta) => {
        const data = { id: respuesta.id, ...respuesta.data() }
        setProducto(data)
      })
  }

  const { isLoading, showLoading, hideLoading } = useLoading();

  useEffect(() => {
    obtenerProducto()
  }, [])

  return (
    <div className="itemlistcontainer">
      {isLoading ? <Loading /> : <ItemDetail producto={producto} />}
    </div>
  )
}

export default ItemDetailContainer
