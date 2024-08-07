import React from 'react'
import { PiNotMemberOfBold } from 'react-icons/pi';
import { useState, useEffect } from 'react';

import AnimationPortada from './AnimationPortada';

import "../../../styles/Portada.css"

//Importo fotos para la animacion
import clapton from '../../../img/animationmain/clapton.jpg'
import gilmour from '../../../img/animationmain/gilmour.jpg'
import grohl from '../../../img/animationmain/grohl.jpg'
import hendrix from '../../../img/animationmain/hendrix.jpg'
import moore from '../../../img/animationmain/moore.jpg'

const Portada = ({ }) => {

  const images = [
    clapton,
    gilmour,
    grohl,
    hendrix,
    moore
  ];

  return (
    <div>
      <h1 className="Tituloh1">
        Maister Melody (Ecomerce de musica)
      </h1>

      <div className='AnimationImg'>
        <AnimationPortada images={images} />
      </div>

      <h2 className="Tituloh2">
        Sobre Nosotros
      </h2>
      <p className="Presentacion">
        Melodía Maestra nació de una pasión compartida por la música y la excelencia en sonido. Fundada en 2024 en el corazón de Montevideo, nuestra empresa comenzó como un pequeño taller de reparación de instrumentos, evolucionando rápidamente hacia un destino de referencia para músicos, aficionados y profesionales del audio.
        Con una selección curada de instrumentos musicales, desde guitarras clásicas hasta sintetizadores modernos, y una gama de discos que abarca desde los clásicos atemporales hasta las últimas novedades, Melodía Maestra es más que una tienda: es un punto de encuentro para la comunidad musical.
        Nuestro compromiso con la calidad se extiende a nuestro catálogo de audio profesional, donde cada pieza de equipo es seleccionada por su rendimiento y fiabilidad. Además, nuestro blog es un espacio dedicado a compartir datos curiosos, noticias y entrevistas con artistas emergentes y establecidos, reflejando nuestra misión de enriquecer la cultura musical.
        La historia de Melodía Maestra es una sinfonía de esfuerzo, dedicación y amor por la música. Cada cliente es un miembro más de nuestra orquesta, y juntos, creamos la armonía perfecta.
      </p>
    </div>
  )
}

export default Portada