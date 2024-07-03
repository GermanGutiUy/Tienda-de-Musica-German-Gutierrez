import React from 'react'
import item from "./item"

const itemList = ({ productos }) => {
  return (
    <div>
        {productos.map((producto) =>(
            <item  key = {producto.id} producto = { producto }/>
            ))}
    </div>
  )
}

export default itemList