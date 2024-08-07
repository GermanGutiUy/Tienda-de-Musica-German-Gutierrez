import React from 'react'
import { useState, useEffect } from 'react';

import { obtenerProductos } from "../../data/data.js" // Importo data
import ItemList from "../ItemListContainer/itemList.jsx"

const cuerdas = () => {
  useEffect(() => {

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
      <ItemList productos={productos} />
    </div>
  )
}

export default cuerdas
