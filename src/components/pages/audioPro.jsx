import React from 'react'
import { obtenerProductos } from "../../data/data.js" // Importo data
import { useState, useEffect } from 'react';
import ItemList from "../ItemListContainer/itemList.jsx"

const audioPro = () => {
    useEffect (()=>{

        obtenerProductos()
        .then((respuesta) => {
          serProductos(respuesta)
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          console.log("Finañlizo la promesa")
        })
    
      }, [])

  return (
    <div>
        <ItemList prodcutos = {productos} />
    </div>
  )
}

export default audioPro
