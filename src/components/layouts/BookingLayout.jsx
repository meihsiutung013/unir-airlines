import React from 'react';
import { Header } from '../sections/Header';
import { Sidebar } from '../sections/booking/Sidebar';
import { Footer } from '../sections/Footer';
import '../../styles/layouts/BookingLayout.css';

export const BookingLayout = ({ children }) => {
  return (
    <div className='booking-layout container-fluid px-0'>
      <div className='fixed-top'>
        <Header />
      </div>
      <main className='container mb-5'>
        <section className='row gy-4 pt-5'>
          <div className='col-12 col-md-auto'>
            <Sidebar />
          </div>
          <div className='col-12 col-md'>
            {children}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}