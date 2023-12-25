import React from 'react';
import { Carousel } from '../sections/home/Carousel';
import { ItineraryForm } from '../forms/ItineraryForm';
import { TopDestinations } from '../sections/home/TopDestinations';

export const Home = () => {

  return (
    <div className='home'>
      <Carousel />
      <div className='row justify-content-center mt-n6 mb-5'>
        <div className='col-11 col-sm-10 col-md-8 col-xl-7'>
          <ItineraryForm />
        </div>
      </div>
      <TopDestinations />
    </div>
  );
}