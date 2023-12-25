import React, { useState, useEffect } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import 'react-datepicker/dist/react-datepicker.css';
import '../../styles/groups/DateRangeSelector.css';
registerLocale('es', es);

export const DateRangeSelector = ({ from, to, isOneWayTrip, onChange }) => {

  const [startDate, setStartDate] = useState(from);
  const [endDate, setEndDate] = useState(to);
  
  let today = new Date();

	useEffect(() => {
		setStartDate(from);
		setEndDate(to);
	}, [from, to]);

  useEffect(() => {
    if (isOneWayTrip) {
      setEndDate(null);
    }
  }, [isOneWayTrip]);

  const handleStartDateChange = (date) => {
    setStartDate(date);
    setEndDate(null);
    onChange('departureDate', date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    onChange('returnDate', date);
  };

  return (
    <div className='row gy-3'>
      <div className='col-12 col-md'>
        <DatePicker
          selectsStart
          locale='es'
          selected={startDate}
          onChange={handleStartDateChange}
          startDate={startDate}
          minDate={today}
          dateFormat='dd/MM/yyyy'
          className='form-control'
          placeholderText='Fecha Ida'
          required
        />
      </div>
      <div className='col-12 col-md'>
        <DatePicker
          selectsEnd
          locale='es'
          selected={endDate}
          onChange={handleEndDateChange}
          endDate={endDate}
          startDate={startDate}
          minDate={startDate}
          dateFormat='dd/MM/yyyy'
          className='form-control'
          placeholderText='Fecha Vuelta'
          disabled={isOneWayTrip}
          required={!isOneWayTrip}
        />
      </div>
    </div>
  );
}