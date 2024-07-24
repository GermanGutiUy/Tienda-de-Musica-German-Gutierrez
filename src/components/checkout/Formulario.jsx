import React, { useState } from 'react';
import validateForm from '../utils/validacionFormulario';
import './formulario.css';

const Formulario = ({ datosFrom, guardarDatosImput, enviarOrden }) => {
  const [repetirEmail, setRepetirEmail] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    const dataForm = { ...datosFrom, repetirEmail };
    const validation = await validateForm(dataForm);
    if (validation.status === "success") {
      enviarOrden(event); // Pasa el evento aquí
    } else {
      setErrors({ ...errors, general: validation.message });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="FormularioContainer">
      <label>Nombre</label>
      <input type="text" name="nombre" value={datosFrom.nombre} onChange={guardarDatosImput} />
      {errors.nombre && <p>{errors.nombre}</p>}

      <label>Telefono</label>
      <input type="text" name="telefono" value={datosFrom.telefono} onChange={guardarDatosImput} />
      {errors.telefono && <p>{errors.telefono}</p>}

      <label>Email</label>
      <input type="email" name="email" value={datosFrom.email} onChange={guardarDatosImput} />
      {errors.email && <p>{errors.email}</p>}

      <label>Repetir Email</label>
      <input type="email" name="repetirEmail" value={repetirEmail} onChange={(e) => setRepetirEmail(e.target.value)} />
      {errors.repetirEmail && <p>{errors.repetirEmail}</p>}

      {errors.general && <p>{errors.general}</p>}

      <div className="FormularioFooter">
        <button type="submit">Enviar orden</button>
      </div>
    </form>
  );
};

export default Formulario;
