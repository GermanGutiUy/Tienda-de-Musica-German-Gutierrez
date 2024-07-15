import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail.jsx'
import { useParams } from 'react-router-dom'
import useLoading from '../hooks/useLoading.jsx';
import Loading from '../ItemListContainer/loading.jsx'; 
import './ItemDetailContainer.css'
import db from "../../db/db.js"
import {doc, getDoc} from "firebase/firestore"

const ItemDetailContainer = () => {
    const [producto, serProducto] = useState({})

    const { idProducto } = useParams()

    const idProdcuto = () =>{
      const docRef = doc(db, "productos", idProducto)
      getDoc(docRef)
      .them((respuesta) => {
        const data = { id: respuesta.id, ...respuesta.data() }
        setProducto(data)
      })
    }



    const { isLoading, showLoading, hideLoading } = useLoading(); //aca

    useEffect (() =>{
      obtenerProducto()
    }, [])



  return (
    <div className="itemlistcontainer">
    {isLoading ? <Loading /> : <ItemDetail producto = {producto} />}
    </div>


  )
}

export default ItemDetailContainer
