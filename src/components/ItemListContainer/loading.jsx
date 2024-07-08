import React from 'react';
import { BeatLoader } from 'react-spinners';
import "./loading.css";

const Loading = () => {
  return (
    <div className="loading-container">
      <BeatLoader />
      <p className="loading-text">Cargando...</p>
    </div>
  );
};

export default Loading;
