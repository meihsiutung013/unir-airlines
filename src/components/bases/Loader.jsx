import React, { useEffect } from 'react';
import '../../styles/bases/Loader.css';

export const Loader = ({ seconds }) => {
  const [counter, setCounter] = React.useState(seconds);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return (
    <div className='loader'>
      <div className='loader__circle'></div>
      <div className='loader__circle'></div>
      <div className='loader__circle'></div>
      <div className='loader__shadow'></div>
      <div className='loader__shadow'></div>
      <div className='loader__shadow'></div>
      <span className='loader__text'>En brevedad...{counter}</span>
    </div>
  );
}