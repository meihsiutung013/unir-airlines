import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MasterLayout } from '../components/layouts/MasterLayout';
import { BookingLayout } from '../components/layouts/BookingLayout';
import { Landing } from '../components/pages/Landing';
import { Home } from '../components/pages/Home';
import { Booking } from '../components/pages/Booking';
import { Payment } from '../components/pages/Payment';
import { Confirm } from '../components/pages/Confirm';
import { NotFound } from '../components/pages/NotFound';

export const GlobalRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<MasterLayout><Home /></MasterLayout>} />
        <Route path='/reservar' element={<BookingLayout><Booking /></BookingLayout>} />
        <Route path='/pagar' element={<BookingLayout><Payment /></BookingLayout>} />
        <Route path='/confirmacion' element={<MasterLayout><Confirm /></MasterLayout>} />
        <Route path='*' element={<MasterLayout><NotFound /></MasterLayout>} />
      </Routes>
    </BrowserRouter>
  );
}