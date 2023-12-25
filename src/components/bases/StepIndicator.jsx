import React from 'react';
import { useBooking } from '../../context/BookingContext';

export const StepIndicator = () => {

  const { step } = useBooking();
  const labels = ['Selección de Pasajes', 'Pagos', '¡A volar!'];

  return (
    <div className='d-grid gap-3 fw-bold mb-4'>
      {
        labels.map((label, index) => (
          <div key={label} className='d-flex align-items-center'>
            <span className={'rounded-pill px-2 me-2 ' + (index + 1 === step ? 'text-bg-primary' : 'text-bg-dark')}>{index + 1}</span>
            <span className={index + 1 === step ? 'text-primary' : ''}>{label}</span>
          </div>
        ))
      }
    </div>
  );
}