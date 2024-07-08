import React, { useEffect, useState } from 'react';

const ContadorEventListener = () => {
  const [contador, setContador] = useState(1);

  const handleClick = () => {
    setContador(prevContador => prevContador + 1);
  };

  useEffect(() => {
    const botonSumar = document.getElementById("boton-sumar");
    botonSumar.addEventListener("click", handleClick);

    // Esta función se ejecuta cuando nuestro componente se desmonta
    return () => {
      // Eliminamos nuestro evento
      botonSumar.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div>
      <p>Valor: {contador}</p>
      <button id="boton-sumar"> + </button>
    </div>
  );
};

export default ContadorEventListener;
