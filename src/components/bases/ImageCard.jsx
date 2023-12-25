import React from 'react';

export const ImageCard = ({ image, title }) => {
  return (
    <div className='card border-0 p-0 shadow'>
      <img src={image} className='card-img img-fluid' alt={title} />
      <div className='card-img-overlay d-flex justify-content-center align-items-end text-shadow text-white'>
        <h4 className='card-title fw-bold'>{title}</h4>
      </div>
    </div>
  );
}