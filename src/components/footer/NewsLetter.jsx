import React, { useState } from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  const [email, setEmail] = useState('');

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Aquí manejo el envío del correo electrónico
    console.log('Email enviado:', email);

    // Limpiar el campo de correo electrónico después del envío
    setEmail('');
  };

  return (
    <div className='newsletter-container'>
      <h1 className='newsletter-title'>News Letter</h1>

      <form onSubmit={handleSubmit} className="newsletter-form">
        <div className="newsletter-input-container">
          <input
            type="email"
            className="newsletter-input"
            placeholder="Ingrese su correo electrónico"
            value={email}
            onChange={handleChangeEmail}
          />
          <button className="newsletter-button" type="submit">Suscríbete</button>
        </div>
      </form>

      <p className="newsletter-description">¡Suscríbete a nuestro NEWS LETTER!</p>
    </div>
  );
}

export default NewsLetter;
