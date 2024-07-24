import React from 'react'

import Item from "./item"

import "./itemList.css"

const itemList = ({ productos }) => {
  return (
    <div className='itemListDiv'>
      {productos.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  )
}

export default itemList
