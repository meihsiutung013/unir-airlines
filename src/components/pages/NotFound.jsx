import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  const { theme } = useTheme();
  return (
    <div className={`vh-100 d-flex justify-content-center align-items-center text-bg-${theme}`}>
      <div className='container text-center'>
        <div className='display-1 fw-bold'>404</div>
        <div className='display-4 mb-5'>Página no encontrada</div>
        <p>Lo sentimos, la página que buscas no está disponible.</p>
        <Link to={'/home'}>
          <button type='button' className='btn btn-lg btn-primary'>Volver a la página de inicio</button>
        </Link>
      </div>
    </div>
  );
}