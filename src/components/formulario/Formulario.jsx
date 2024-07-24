import React, { useState } from 'react';

const Formulario = () => {
  const [email, setEmail] = useState('');

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email enviado:', email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email: </label>
      <input
        type="email"
        value={email}
        onChange={handleChangeEmail}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;
