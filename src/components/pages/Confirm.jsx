import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useItineraryForm } from '../../context/ItineraryFormContext';

export const Confirm = () => {

  const { isEmpty } = useItineraryForm();
  const navigate = useNavigate();

  useEffect(() => {
    if (isEmpty()) {
      navigate('/home');
    }
  }, [isEmpty, navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='landing container-full d-flex justify-content-center align-items-center vh-100'>
      <div className='card text-center opacity-75 shadow'>
        <div className='card-body p-5'>
          <div><i className='fa-solid fa-circle-check fa-6x text-primary py-5'></i></div>
          <h1 className='display-3'>¡Gracias por elegirnos!</h1>
          <h2>Su compra fue realizado con éxito.</h2>
          <p className='pb-5'>Recibirás un correo electrónico con los detalles de tu itinerario. Si tienes alguna pregunta, no dudes en contactarnos.</p>
        </div>
      </div>
    </div>
  );
}