import React from 'react';
import { useItineraryForm } from '../../context/ItineraryFormContext';
import { useBooking } from '../../context/BookingContext';

export const Account = () => {

  const { formData } = useItineraryForm();
  const { base, tuua, igv, total } = useBooking();

  return (
    <div className='p-4'>
      <h6 className='fw-bold'>
        <i className={`fa-solid fa-user-${formData.passengers === 1 ? 'large' : 'group'}`}></i>
        <span className='ps-1'>Pasajeros: {formData.passengers}</span>
      </h6>
      <hr />
      <div className='d-grid gap-2'>
        <div className='row'>
          <div className='col-12 col-md-8'>
            <small className='fw-bold'>Tarifa Aérea</small>
          </div>
          <div className='col-12 col-md-4 text-end'>
            <small>${(base).toFixed(2)}</small>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-md-8'>
            <small className='fw-bold'>Tarifa unificada de uso de aeropuerto TUUA (Perú)</small>
          </div>
          <div className='col-12 col-md-4 text-end'>
            <small>${(tuua).toFixed(2)}</small>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-md-8'>
            <small className='fw-bold'>Impuesto general a las ventas (Perú)</small>
          </div>
          <div className='col-12 col-md-4 text-end'>
            <small>${(igv).toFixed(2)}</small>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-md-8'>
            <small className='fw-bold'>Subtotal</small>
          </div>
          <div className='col-12 col-md-4 text-end'>
            <small>${(total).toFixed(2)}</small>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-md-8'>
            <small className='fw-bold'>TOTAL</small>
          </div>
          <div className='col-12 col-md-4 text-end'>
            <small>${(total * formData.passengers).toFixed(2)}</small>
          </div>
        </div>
      </div>
    </div>
  );
}