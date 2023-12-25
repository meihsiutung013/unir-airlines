import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useItineraryForm } from '../../context/ItineraryFormContext';
import { useBooking } from '../../context/BookingContext';
import { ItineraryForm } from '../forms/ItineraryForm';
import { Itinerary } from '../sections/booking/Itinerary';
import { DaySelector } from '../groups/DaySelector';
import { FlightSelector } from '../groups/FlightSelector';

export const Booking = () => {

  const { color } = useTheme();
  const navigate = useNavigate();
  const { formData, isEmpty } = useItineraryForm();
  const { payBooking, departureFlight, returnFlight } = useBooking();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (isEmpty()) {
      navigate('/home');
    }
  }, [isEmpty, navigate]);

  return (
    <div className='booking d-flex flex-column gap-4'>
      <Itinerary />
      {!formData.isHidden && (<ItineraryForm />)}
      <div className='my-1'></div>
      <DaySelector type='departure' />
      <FlightSelector type='departure' />
      {!formData.isOneWayTrip && (<hr className='my-1' />)}
      {!formData.isOneWayTrip && (<DaySelector type='return' />)}
      {!formData.isOneWayTrip && (<FlightSelector type='return' />)}
      {
        departureFlight.flightId && (returnFlight.flightId || formData.isOneWayTrip) && (
          <div>
            <hr />
            <div className='text-end mt-2 mb-4'>
              <Link to={'/pagar'}>
                <button type='button' className={`btn btn-lg btn-${color}`} onClick={payBooking}>Continuar</button>
              </Link>
            </div>
          </div>
        )
      }
    </div>
  );
}