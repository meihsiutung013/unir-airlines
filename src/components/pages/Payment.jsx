import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useItineraryForm } from '../../context/ItineraryFormContext';
import { PassengerForm } from '../forms/PassengerForm';
import { PaymentForm } from '../forms/PaymentForm';
import visa from '../../assets/cards/visa.png';
import mastercard from '../../assets/cards/mastercard.png';
import americanExpress from '../../assets/cards/american-express.png';

export const Payment = () => {

  const { color } = useTheme();
  const navigate = useNavigate();

  let cards = [
    { description: 'VISA', image: visa },
    { description: 'Mastercard', image: mastercard },
    { description: 'American Express', image: americanExpress }
  ];

  const { formData, isEmpty } = useItineraryForm();
  const [selectedCard, setSelectedCard] = useState('VISA');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (event) => {
    setSelectedCard(event.target.value);
  };

  const forms = [];
  for (let i = 1; i <= formData.passengers; i++) {
    forms.push(<PassengerForm key={i} number={i} />);
  }

  useEffect(() => {
    if (isEmpty()) {
      navigate('/home');
    }
  }, [isEmpty, navigate]);

  return (
    <div>

      <div className='card shadow mb-4'>
        <div className='card-body'>
          <div className='d-flex align-items-center gap-3 mb-3'>
            <div><i className='fa-2x fa-regular fa-id-card text-primary'></i></div>
            <div>
              <h5 className='fw-bold mb-0'>Datos del Pasajero</h5>
              <small>Ingresar los nombres de todos los pasajeros y su documento oficial de identificación.</small>
            </div>
          </div>
          <div className='d-grid gap-4'>{forms}</div>
        </div>
      </div>

      <div className='card shadow mb-5'>
        <div className='card-body'>
          <div className='d-flex align-items-center gap-3 mb-3'>
            <div><i className='fa-2x fa-regular fa-credit-card text-primary'></i></div>
            <div>
              <h5 className='fw-bold mb-0'>Método de pago</h5>
            </div>
          </div>
          <div className='p-3'>
            <div className='row'>
              {
                cards.map((card, index) => (
                  <div key={index} className='col text-center'>
                    <img src={card.image} className='card-img img-fluid' alt={card.description} />
                    <div className='mt-2'>
                      <input
                        type='radio'
                        name='bankcard'
                        className='form-check-input'
                        value={card.description}
                        checked={card.description === selectedCard}
                        onChange={handleChange} />
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <PaymentForm />
        </div>
      </div>
      <hr />
      <div className='text-end mt-2 mb-4'>
        <Link to={'/confirmacion'}>
          <button type='button' className={`btn btn-lg btn-${color}`}>Pagar</button>
        </Link>
      </div>

    </div>
  );
}