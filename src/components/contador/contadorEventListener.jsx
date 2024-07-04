import React from 'react'
import { useEffect, useState } from 'react'

const contadorEventListener = () => {
    const[contador, setContador] = useState(1)

    const handleClick = () => {
        setContador = ( (prevContador) => prevContador + 1)
    }

    useEffect (() => {

        const botonSumar = document.getElementById("boton-sumar")
        botonSumar.addEventListener("Click", handleClick)

        //Esta funcion se ejecuta cuando nuestro componente se desmonta
        return () => {
            //eliminamos nuestro evento
            botonSumar.removeEventListener("Click", handleClick)
        }

    },[])
  return (
    <div>
      <p>Valor:</p>
      <button id="boton-sumar"> + </button>
    </div>
  )
}

export default contadorEventListener
