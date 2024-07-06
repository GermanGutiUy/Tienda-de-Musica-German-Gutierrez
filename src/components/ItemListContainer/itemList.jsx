import React from 'react'
import Item from "./item"

const itemList = ({ productos }) => {
  return (
    <div>
        {productos.map((producto) =>(
            <Item  key = {producto.id} producto = { producto }/>
            ))}
    </div>
  )
}

export default itemList