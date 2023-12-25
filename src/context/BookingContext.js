import React, { createContext, useState, useEffect, useContext } from 'react';

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {

  let emptyFlight = {flightId: null, origin: null, destination: null, departure: null, arrival: null, cost: 0, passengers: 0};

  const [step, setStep] = useState(1);
  const [departureFlight, setDepartureFlight] = useState(emptyFlight);
  const [returnFlight, setReturnFlight] = useState(emptyFlight);
  const [base, setBase] = useState(0);
  const [tuua, setTUUA] = useState(0);
  const [igv, setIGV] = useState(0);
  const [total, setTotal] = useState(0);

  const updateFlight = (trip, flight) => {
    let object = (flight ? flight : emptyFlight);
    if (trip === 'departure') {
      setDepartureFlight(object);
    } else {
      setReturnFlight(object);
    }
  };

  const payBooking = () => {
    setStep(2);
  };

	useEffect(() => {
		setBase(departureFlight.cost + (returnFlight.cost ? returnFlight.cost : 0));
	}, [departureFlight.cost, returnFlight.cost]);

	useEffect(() => {
		setTUUA(0.3 * base);
    setIGV(0.18 * base);
	}, [base]);

	useEffect(() => {
		setTotal(base + tuua + igv);
	}, [base, tuua, igv]);

  return (
    <BookingContext.Provider value={{ step, base, tuua, igv, total, departureFlight, returnFlight, updateFlight, payBooking }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};