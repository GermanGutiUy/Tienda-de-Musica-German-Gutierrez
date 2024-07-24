import React from 'react'
import { useState } from 'react'

const Formulario = () => {
  /*     const [nombre, setNombre] = useState ("")
         const [direccion, setDireccion] = useState("")*/
  const [email, setEmail] = useState("")


  /*   const handleChangeName = (event) => {
         setNombre(event.target.value)
     }
     const handleChangeDireccion = (event) => {
         setDireccion(event.target.value)
     }*/

  const handleChangeEmail = (event) => {
    setEmail(event.target.value)

  }

  const handleSubmit = () => {
    //evito recargar la pagina y perder el valor de nuestros editados
    event.preventDefault()
    const usuario = { nombre, direccion, email }

    console.log(usuario)
  }

  return (
    <from onSubmit={handleSubmit}>
      {/* <leabel>Nombre: </leabel>
      <imput type = "text" value = {nombre} onChange = {handleChangeName}/>

      <leabel>Direccion: </leabel>
      <imput type = "text" value = {direccion} onChange = {handleChangeDireccion}/> */}

      <leabel>Email: </leabel>
      <imput type="emial" value={email} onChange={handleChangeEmail} />

      <button type="submit">Enviar</button>
    </from>

  )
}

export default Formulario
