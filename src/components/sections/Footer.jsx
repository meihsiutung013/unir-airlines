import React from 'react';
import { Logo } from '../bases/Logo';
import '../../styles/sections/Footer.css';

export const Footer = () => {
  return (
    <footer className='text-bg-dark border-top py-2'>
      <div className='container d-flex justify-content-between align-items-center'>
        <div className="fw-bold mb-3 mb-md-0">© 2023 UNIR Airlines - Perú</div>
        <Logo isColored={false} width='w-120px' />
      </div>
    </footer>
  );
}