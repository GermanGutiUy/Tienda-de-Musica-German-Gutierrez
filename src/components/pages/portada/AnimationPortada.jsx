import React, { useState, useEffect } from 'react';

const AnimationPortada = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Cambia a la siguiente imagen
      setCurrentImageIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Hace el cambio cada 5 segundos

    return () => {
      clearInterval(intervalId);
    };
  }, [images]); // Ejecuta el efecto cada vez que cambia de imagen

  return (
    <div>
      <img src={images[currentImageIndex]} alt="slide" />
    </div>
  );
};

export default AnimationPortada;
