import React from 'react';
import { ThemeSelector } from '../bases/ThemeSelector';
import { Logo } from '../bases/Logo';
import '../../styles/sections/Header.css';

export const Header = () => {
  return (
    <header className='bg-white border-bottom py-1'>
      <div className='container d-flex justify-content-between align-items-center'>
        <Logo />
        <div className='text-end'>
          <ThemeSelector />
        </div>
      </div>
    </header>
  );
}