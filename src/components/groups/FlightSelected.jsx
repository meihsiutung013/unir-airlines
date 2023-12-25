import React from 'react';

export const FlightSelected = (props) => {
  return (
    <div className='mb-2'>
      <div><span className='text-primary fw-bold'>{props.label}</span> {props.day}</div>
      <div className='d-flex gap-1 px-2 py-1 text-bg-primary rounded'>
        <span><i className='fa-solid fa-plane-departure'></i></span>
        <span><small className='fw-bold px-1'>{props.origin}</small></span>
        <span><small>{props.departure}</small></span>
        <span className='px-2'></span>
        <span><i className='fa-solid fa-plane-arrival'></i></span>
        <span><small className='fw-bold'>{props.destination}</small></span>
        <span><small>{props.arrival}</small></span>
      </div>
    </div>
  );
}