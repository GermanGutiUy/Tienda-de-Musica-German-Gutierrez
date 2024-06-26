import React from 'react'

const contadorLogic = ({contador, aumentarContador, disminuirContador}) => {
  return (
    <div>
        <button onClick ={disminuirContador}></button>
        <p>Contador: {contador} </p>
        <button onClick = {aumentarContador()} >+</button>
    </div>
  )
}

export default contadorLogic
