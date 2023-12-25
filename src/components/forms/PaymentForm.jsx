import React from 'react';
import { useItineraryForm } from '../../context/ItineraryFormContext';
import { useCities } from '../../hooks/useCities';
import { useBooking } from '../../context/BookingContext';

export const PaymentForm = () => {

  const { getCountries } = useCities();
  const { formData } = useItineraryForm();
  const { total } = useBooking();

  const months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const years = [];
  let today = new Date();
  let thisYear = today.getFullYear();
  for (let i = 0; i < 10; i++) {
    years.push(<option key={i} value={thisYear + i}>{thisYear + i}</option>);
  }

  const handleChange = (event) => {
    
  };

  return (
    <form className='d-grid gap-3'>
      <div className='row'>
        <div className='col-12'>
          <div className='form-floating'>
            <select name='issueCountry' className='form-select' required>
              <option key='' value=''>Seleccionar</option>
              {
                getCountries().map((country, index) => (
                  <option key={country} value={country}>{country}</option>
                ))
              }
            </select>
            <label htmlFor='issueCountry'>País emisor de la tarjeta</label>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-12 col-md-6'>
          <div className='form-floating'>
            <input type='text' className='form-control' name='amount' value={(total * formData.passengers).toFixed(2)} onChange={handleChange} required />
            <label htmlFor='amount'>Monto</label>
          </div>
        </div>
        <div className='col-12 col-md-6'>
          <div className='form-floating'>
            <select name='currency' className='form-select' required>
              <option key='USD' value='USD'>USD</option>
            </select>
            <label htmlFor='currency'>Moneda</label>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
          <div className='form-floating'>
            <input type='text' className='form-control' name='cardNumber' required />
            <label htmlFor='cardNumber'>Número de tarjeta</label>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-12 col-md-6'>
          <div className='form-floating'>
            <select name='expireMonth' className='form-select' required>
              <option key='' value=''>Seleccionar</option>
              {
                months.map((month, index) => (
                  <option key={index} value={index + 1}>{month}</option>
                ))
              }
            </select>
            <label htmlFor='expireMonth'>Mes de vencimiento</label>
          </div>
        </div>
        <div className='col-12 col-md-6'>
          <div className='form-floating'>
            <select name='expireYear' className='form-select' required>
              <option key='' value=''>Seleccionar</option>
              {years}
            </select>
            <label htmlFor='expireYear'>Año de vencimiento</label>
          </div>
        </div>
      </div>
    </form>
  );
}