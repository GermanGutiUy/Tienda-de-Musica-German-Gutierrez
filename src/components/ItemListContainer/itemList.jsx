import React from 'react'
import item from "./item"

const itemList = ({ productos }) => {
  return (
    <div>
        {producto.map((producto) =>(
            <item  key = {producto.id} producto = { producto }/>
            ))}
    </div>
  )
}

export default itemList
