import React from 'react'
import item from "./item"

const itemList = ({ productos }) => {
  return (
    <div>
        {prodcutos.map((prodcuto) =>(
            <item  key = {prodcuto.id} prodcuto = { prodcuto }/>
            ))}
    </div>
  )
}

export default itemList
