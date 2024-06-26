import React from 'react'

const item = ({ prodcuto }) => {
  return (
    <div>
        <img src={prodcuto.imagen} alt =""/>
        <p>{prodcuto.nombre}</p>
        <p>${prodcuto.precio}</p>
    </div>
  )
}

export default item
