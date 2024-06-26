import React from 'react'
import { useState } from 'react'
import contadorLogic from "./contadorLogic"

const contador = ({stock}) => {
   const [ contador, setContador ] = useSate(0)

// Aumento de contador
    const aumentarContador = () => {
        if(contador < stock) // Agregar el Srock maximo
        setContador (contador + 1)
    }

    const disminuirContador = () => {
        if(contador > 0)
        setContador(contador-1)
    }

  return (
    <div>
      <contadorLogic contador = {contadorLogic} aumentarContador = {aumentarContador} disminuirContador = {disminuirContador}/> //Children
    </div>
  )
}

export default contador
