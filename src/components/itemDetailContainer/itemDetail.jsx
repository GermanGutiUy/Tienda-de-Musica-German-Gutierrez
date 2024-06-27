import React from 'react'

const itemDetail = ({producto}) => {
  return (
    <div>
      <h2>{prodcuto.nombre}</h2>
      <img src ={prodcuto.imagen} alt="" />
    </div>
  )
}

export default itemDetail
