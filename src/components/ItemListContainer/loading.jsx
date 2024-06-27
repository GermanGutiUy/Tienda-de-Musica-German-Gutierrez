import React from 'react'
import { BeatLoader } from 'react-spinners'

const loading = () => {
  return (
    <div 
    style={{
        width: "100%",
        heignt: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems:"Center"}}>
    <BeatLoader />
    <p>Cargando...</p>
    </div>
  )
}

export default loading
