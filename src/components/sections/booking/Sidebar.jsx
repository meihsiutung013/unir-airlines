import React from 'react';
import { useItineraryForm } from '../../../context/ItineraryFormContext';
import { useBooking } from '../../../context/BookingContext';
import { StepIndicator } from '../../bases/StepIndicator';
import { FlightSelected } from '../../groups/FlightSelected';
import { Account } from '../../groups/Account';

export const Sidebar = () => {

  const { formData } = useItineraryForm();
  const { total, departureFlight, returnFlight } = useBooking();

  return (
    <div className='card shadow max-w-270px mb-5'>
      <div className='card-body p-0'>
        <div className='p-4'>
          <StepIndicator />
          <h6 className='fw-bold pt-2'>Detalles de tu compra:</h6>
          <hr />
          {departureFlight.flightId && (
            <FlightSelected
              type='departure'
              label='IDA'
              day={formData.departureDay}
              origin={departureFlight.origin}
              destination={departureFlight.destination}
              departure={departureFlight.departure}
              arrival={departureFlight.arrival}
            />)}
          {!formData.isOneWaytrip && returnFlight.flightId && (
            <FlightSelected
              type='departure'
              label='IDA'
              day={formData.returnDay}
              origin={returnFlight.origin}
              destination={returnFlight.destination}
              departure={returnFlight.departure}
              arrival={returnFlight.arrival}
            />)}
        </div>

        {(departureFlight.flightId && (returnFlight.flightId || formData.isOneWaytrip)) && (
          <div className='d-flex justify-content-between text-bg-dark fw-bold px-3 py-2'>
            <small>Total a pagar</small>
            <small>USD ${(total * formData.passengers).toFixed(2)}</small>
          </div>
        )}

        {(departureFlight.flightId && (returnFlight.flightId || formData.isOneWaytrip)) && (<Account />)}

      </div>
    </div>
  );
}