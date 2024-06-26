import React from 'react'
import { useState } from 'react'

const contador = () => {
   const [ contador, setContador ] = useSate(0)

// Aumento de contador
    const aumentarContador = () => {
        if(contador < 100) // Agregar el Srock maximo
        setContador (contador + 1)
    }

    const disminuirContador = () => {
        if(contador > 0)
        setContador(contador-1)
    }

  return (
    <div>
        <button onClick ={disminuirContador}></button>
        <p>Contador: {contador} </p>
        <button onClick = {aumentarContador()} >+</button>
    </div>
  )
}

export default contador
