import React from 'react';
import { useItineraryForm } from '../../../context/ItineraryFormContext';

export const Itinerary = () => {

  const { formData, updateFormData } = useItineraryForm();

  const toggleItineraryForm = () => {
    updateFormData('isHidden', !formData.isHidden);
  };

  return (
    <div className='card shadow'>
      <div className='card-body'>
        <div className='d-flex align-items-center align-items-md-start text-center gap-2'>
          {/* Origin */}
          <div>
            <div className='fw-bold'>{formData.originCity}</div>
            <div>{formData.origin}</div>
          </div>
          {/* Departure Date */}
          <div className='min-w-95px'>
            <div className='border-bottom'>
              <small className='px-3'>{formData.departureDay}</small>
            </div>
            <div className='small d-md-none'>{formData.returnDay}</div>
          </div>
          {/* Destination */}
          <div>
            <div className='fw-bold'>{formData.destinationCity}</div>
            <div>{formData.destination}</div>
          </div>
          {
            !formData.isOneWayTrip && (
              /* Return Date */
              <div className='d-none d-md-block min-w-95px'>
                <div className='border-bottom'>
                  <small className='px-3'>{formData.returnDay}</small>
                </div>
              </div>
            )
          }
          {
            !formData.isOneWayTrip && (
              /* Origin */
              <div className='d-none d-md-block'>
                <div className='fw-bold'>{formData.originCity}</div>
                <div>{formData.origin}</div>
              </div>
            )
          }
          {/* Button modify search */}
          <button type='button' className='btn btn-link ms-auto' title='Modificar búsqueda' onClick={toggleItineraryForm}>
            <i className='fa-solid fa-pen'></i>
          </button>
        </div>
      </div>
    </div>
  );
}