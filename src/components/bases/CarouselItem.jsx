import React from 'react';

export const CarouselItem = ({ image, alt, active }) => {
  return (
    <div className={active ? 'carousel-item active' : 'carousel-item'}>
      <img className='img-fluid' src={image} alt={alt} />
    </div>
  );
}