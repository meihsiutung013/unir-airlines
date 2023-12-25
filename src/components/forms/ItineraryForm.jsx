import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useItineraryForm } from '../../context/ItineraryFormContext';
import { CitiesSelector } from '../groups/CitiesSelector';
import { DateRangeSelector } from '../groups/DateRangeSelector';
import { PassengerNumberSelector } from '../groups/PassengerNumberSelector';
import { TripTypeSelector } from '../groups/TripTypeSelector';
import '../../styles/forms/ItineraryForm.css';

export const ItineraryForm = () => {

  const navigate = useNavigate();
  const { color } = useTheme();
  const { formData, updateFormData } = useItineraryForm();

  const handleChange = (name, value) => {
    updateFormData(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateFormData('isHidden', true);
    navigate('/reservar');
  };

  return (
    <div className={`card text-bg-${color} bg-opacity-75 shadow`}>
      <div className='card-body'>

        <form className='d-grid gap-3' onSubmit={handleSubmit}>

          <TripTypeSelector isOneWayTrip={formData.isOneWayTrip} onChange={handleChange} />
          <CitiesSelector from={formData.origin} to={formData.destination} onChange={handleChange} />
          <DateRangeSelector from={formData.departureDate} to={formData.returnDate} onChange={handleChange} isOneWayTrip={formData.isOneWayTrip} />

          <div className='row gy-3'>
            <div className='col-12 col-md'>
              <PassengerNumberSelector number={formData.passengers} onChange={handleChange} />
            </div>
            <div className='col-12 col-md'>
              <div className='d-flex justify-content-end'>
                <button type='submit' className='btn btn-primary'>Buscar</button>
              </div>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
}