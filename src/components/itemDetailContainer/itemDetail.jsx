import React from 'react'

const itemDetail = ({producto}) => {
  return (
    <div>
      <h2>{producto.nombre}</h2>
      <img src ={producto.imagen} alt="" />
    </div>
  )
}

export default itemDetail
