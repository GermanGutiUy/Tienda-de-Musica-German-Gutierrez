import React, { useState, useEffect } from 'react';

const ContadorEventListener = ({ stock }) => {
  const [contador, setContador] = useState(0);

  const handleClick = () => {
    setContador(prevContador => (prevContador < stock ? prevContador + 1 : prevContador));
  };

  useEffect(() => {
    const botonSumar = document.getElementById("boton-sumar");
    botonSumar.addEventListener("click", handleClick);

    return () => {
      botonSumar.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div>
      <p>Valor: {contador}</p>
      <button id="boton-sumar">+</button>
    </div>
  );
};

export default ContadorEventListener;
