import React, { useState, useEffect } from 'react';

export const TripTypeSelector = ({ isOneWayTrip, onChange }) => {

  const [isOneWayRoute, setIsOneWayRoute] = useState(isOneWayTrip);

  useEffect(() => {
    setIsOneWayRoute(isOneWayTrip);
  }, [isOneWayTrip]);

  const handleChange = (e) => {
    let value = e.target.value === 'true';
    setIsOneWayRoute(value);
    onChange('isOneWayTrip', value);
  };

  return (
    <div className='d-flex gap-3'>
      {/* Radiobutton Ida y Vuelta  */}
      <div className='form-check'>
        <input
          type='radio'
          id='twoWayRoute'
          name='routeType'
          value={false}
          className='form-check-input'
          checked={!isOneWayRoute}
          onChange={handleChange} />
        <label className='form-check-label' htmlFor='twoWayRoute'>
          Ida y vuelta
        </label>
      </div>
      {/* Radiobutton Solo ida  */}
      <div className='form-check'>
        <input
          type='radio'
          id='oneWayRoute'
          name='routeType'
          value={true}
          className='form-check-input'
          checked={isOneWayRoute}
          onChange={handleChange} />
        <label className='form-check-label' htmlFor='oneWayRoute'>
          Solo ida
        </label>
      </div>
    </div>
  );
};