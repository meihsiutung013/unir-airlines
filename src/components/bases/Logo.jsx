import React from 'react';
import { Link } from 'react-router-dom';
import colorLogo from '../../assets/logo-color.png';
import whiteLogo from '../../assets/logo-white.png';
import '../../styles/bases/Logo.css';

export const Logo = ({ isColored = true, width = 'w-150px' }) => {
  return (
    <Link to={'/home'}>
      <img src={isColored ? colorLogo : whiteLogo} alt='UNIR Airlines' className={`img-logo ${width}`} />
    </Link>
  );
}