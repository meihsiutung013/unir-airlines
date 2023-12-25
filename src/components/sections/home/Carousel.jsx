import React from 'react';
import { CarouselItem } from '../../bases/CarouselItem';
import image1 from '../../../assets/carousel/slide-1.jpg';
import image2 from '../../../assets/carousel/slide-2.jpg';
import image3 from '../../../assets/carousel/slide-3.jpg';
import '../../../styles/sections/Carousel.css';

export const Carousel = () => {
  const slides = [
    { image: image1, alt: 'Slide 1', active: true },
    { image: image2, alt: 'Slide 2', active: false },
    { image: image3, alt: 'Slide 3', active: false }
  ];

  return (
    <div id='carousel' className='carousel slide mb-5' data-bs-ride='carousel'>
      <div className='carousel-inner'>
        {
          slides.map((slide, index) => (
            <CarouselItem key={index} image={slide.image} alt={slide.alt} active={slide.active} />
          ))
        }
      </div>
      <button className='carousel-control-prev' type='button' data-bs-target='#carousel' data-bs-slide='prev'>
        <i className='fa-3x fa-solid fa-circle-chevron-left text-white'></i>
        <span className='visually-hidden'>Anterior</span>
      </button>
      <button className='carousel-control-next' type='button' data-bs-target='#carousel' data-bs-slide='next'>
        <i className='fa-3x fa-solid fa-circle-chevron-right text-white'></i>
        <span className='visually-hidden'>Siguiente</span>
      </button>
    </div>
  );
}