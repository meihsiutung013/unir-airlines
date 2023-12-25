import React, { useState, useEffect } from 'react';

export const PassengerNumberSelector = ({ number, onChange }) => {
  
  const [passengers, setPassengers] = useState(number);
  const [label, setLabel] = useState('');

  useEffect(() => {
    setPassengers(number);
    setLabel(number === 1 ? 'pasajero' : 'pasajeros');
  }, [number]);

  const handleChange = (e) => {
    let value = parseInt(e.target.value ? e.target.value : 1);
    setPassengers(value);
    onChange('passengers', value);
  };

  return (
    <div className='input-group'>
      <input type='number' min='1' step='1' className='form-control text-center' value={passengers} onChange={handleChange} required />
        <span className='input-group-text'>{label}</span>
    </div>
  );
}