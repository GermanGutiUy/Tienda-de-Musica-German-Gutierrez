//Devuelve una vista por cada titulo

import React from 'react'
import hocBuscador from './hocBuscador'

const listarProductos = ({ productos }) => {
  return (
    <div>
      {
        productos.map(() => {
          <div key={productos.id}>
            <p>{productos.title}</p>
          </div>
        })
      }
    </div>
  )
}

const ListarProductosConHoc = hocBuscador(listarProductos)

export default ListarProductosConHoc 