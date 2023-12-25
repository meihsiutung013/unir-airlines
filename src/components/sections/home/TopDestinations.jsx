import React from 'react';
import { ImageCard } from '../../bases/ImageCard';
import top1 from '../../../assets/destinations/machu-picchu.jpg';
import top2 from '../../../assets/destinations/rio-de-janeiro.jpg';
import top3 from '../../../assets/destinations/buenos-aires.jpg';

export const TopDestinations = () => {

  const ranking = [
    { code:'CUS', image: top1, title: 'N°1 Cusco' },
    { code:'RIO', image: top2, title: 'N°2 Rio de Janeiro' },
    { code:'BUE', image: top3, title: 'N°3 Buenos Aires' }
  ];

  return (
    <section>
      <div className='container px-4 py-4'>
        <h2 className='pb-2 fw-bold border-bottom'>Destinos más buscados</h2>
        <div className='row align-items-stretch gap-4 py-4'>
          {
            ranking.map((city) => (
              <div key={city.code} className='col-12 col-md'>
                <ImageCard image={city.image} title={city.title} />
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}