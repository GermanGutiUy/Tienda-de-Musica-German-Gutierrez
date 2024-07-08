import React from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  return (
    <div className='newsletter-container'>
      <h1 className='newsletter-title'>News Letter</h1>
      
      <div className="newsletter-input-container">
        <input type="email" className="newsletter-input" placeholder="Ingrese su correo electrónico" />
        <button className="newsletter-button">Suscríbete</button>
      </div>

      <p className="newsletter-description">¡Suscríbete a nuestro NEWS LETTER!</p>
    </div>
  )
}

export default NewsLetter;
