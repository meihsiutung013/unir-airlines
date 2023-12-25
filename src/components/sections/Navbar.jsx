import React from 'react';

export const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark border-bottom'>
      <div className='container'>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbar' aria-expanded='false'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbar'>
          <ul className='navbar-nav my-2 my-sm-0 ms-2 ms-sm-0'>
            <li className='nav-item'>
              <span className='nav-link text-white'>Check-in</span>
            </li>
            <li className='nav-item'>
              <span className='nav-link text-white'>Administra tu viaje</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}