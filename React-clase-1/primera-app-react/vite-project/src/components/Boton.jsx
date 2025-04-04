import React from 'react';

const Boton = ({ texto, color }) => {
  const estilo = {
    backgroundColor: color,
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return <button style={estilo}>{texto}</button>;
};

export default Boton;
