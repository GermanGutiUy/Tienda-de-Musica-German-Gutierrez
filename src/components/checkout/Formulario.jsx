import React from 'react'

const Formulario = ({ datosFrom, guardarDatosImput, enviarOrden }) => {
  return (
    <form onSubmit={enviarOrden}>
      <label>Nombre</label>
      <imput type="text" name="nombre" value={datosFrom.nombre} onChange={guardarDatosImput} />

      <label>Telefono</label>
      <imput type="text" name="telefono" value={datosFrom.telefono} onChange={guardarDatosImput} />

      <label>Email</label>
      <imput type="email" name="email" value={datosFrom.email} onChange={guardarDatosImput} />

      <button type="submit">Enviar orden</button>

    </form>
  )
}

export default Formulario
