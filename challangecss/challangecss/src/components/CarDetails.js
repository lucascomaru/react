import React from 'react'

const CarDetails = ({brand, km, color}) => {
  return (
    <div>
        <h2>Detalhes do carro</h2>
        <li>Marca: {brand}</li>
        <li>KM: {km}</li>
        <li>Cor: {color}</li>
    </div>
  );
};

export default CarDetails;