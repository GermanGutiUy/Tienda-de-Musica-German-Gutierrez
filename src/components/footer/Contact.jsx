import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className='ContactContainer'>
      <div className='ContactDiv'>
        <h1 className='Contact'>Contacto</h1>
        <ul className='ListContact'>
          <li>Email: mistermelody@contact.com</li>
          <li>Tel: 2365987654</li>
          <li>Cel: +65 698 321 698</li>
          <li>Dirección: Avenida ASD 1253 esquina ASD</li>
        </ul>
      </div>
      <div className='WorkDiv'>
        <h1 className='Work'>Horarios de atención al Cliente</h1>
        <ul className='ListWork'>
          <li>Lunes a Viernes de 9:00 - 18:00</li>
          <li>Sábados de 9:00 a 13:00</li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
