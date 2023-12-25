import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useFlights } from '../../hooks/useFlights';
import { useItineraryForm } from '../../context/ItineraryFormContext';
import { formatDate, isEqual, isBeforeToday, addDays } from '../../utils/dates';

export const DaySelector = ({ type }) => {

  const { color, theme } = useTheme();
  const { getChepeastCost } = useFlights();
  const { formData, updateFormData } = useItineraryForm();
  const [trip, setTrip] = useState(type); // departure, return

  useEffect(() => {
    setTrip(type);
  }, [type]);

  const getList = (startDate, n) => {
    const dates = [];
    let firstDate = addDays(startDate, -2);
    while (isBeforeToday(firstDate)) {
      firstDate = addDays(firstDate, 1);
    }
    for (let i = 0; i < n; i++) {
      let currentDate = addDays(firstDate, i);
      dates.push(currentDate);
    }
    return dates;
  }

  const handleChange = (value) => {
    let selected = new Date(trip === 'departure' ? formData.departureDate : formData.returnDate);
    selected.setDate(selected.getDate() + value);
    updateFormData(`${trip}Date`, selected);
  };

  return (
    <div className='row align-items-center justify-content-center'>
      <div className='col-auto'>
        <button type='button' className='btn btn-link p-0' onClick={() => handleChange(-1)}>
          <i className={`fa-2x fa-regular fa-circle-left text-${color}`}></i>
        </button>
      </div>
      {
        getList(trip === 'departure' ? formData.departureDate : formData.returnDate, 5).map((day, index) => (
          <div key={formatDate(day)} className='col'>
            <button
              type='button'
              className={`btn btn-${isEqual(day, trip === 'departure' ? formData.departureDate : formData.returnDate) ? color : theme} border w-100 text-center shadow`}
              onClick={() => handleChange(index)}
            >
              <small>{formatDate(day)}</small><br />
              <small>{getChepeastCost(formData.origin, formData.destination, day)}</small>
            </button>
          </div>
        ))
      }
      <div className='col-auto'>
        <button type='button' className='btn btn-link p-0' onClick={() => handleChange(1)}>
          <i className={`fa-2x fa-regular fa-circle-right text-${color}`}></i>
        </button>
      </div>
    </div >
  );
}