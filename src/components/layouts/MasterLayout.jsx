import React from 'react';
import { Header } from '../sections/Header';
import { Navbar } from '../sections/Navbar';
import { Footer } from '../sections/Footer';
import '../../styles/layouts/MasterLayout.css';

export const MasterLayout = ({ children }) => {
  return (
    <div className='master-layout container-fluid px-0'>
      <div className='fixed-top'>
        <Header />
        <Navbar />
      </div>
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}