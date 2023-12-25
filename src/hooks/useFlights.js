import { useState, useEffect } from 'react';
import { flights as data } from '../mocks/flights';
import { isEqual, formatTime } from '../utils/dates';
import { useBooking } from '../context/BookingContext';

export const useFlights = () => {

  const [flights, setFlights] = useState([]);
  const { updateFlight } = useBooking();

  useEffect(() => {
    const fetchFlights = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setFlights(data);
    };
    fetchFlights();
  }, []);

  const filterFlights = (origin, destination, departure) => {
    return flights.filter(flight =>
      flight.origin === origin &&
      flight.destination === destination &&
      isEqual(flight.departure, departure)
    );
  };

  const findFlightById = (flightId) => {
    return flights.find(flight => flight.id === flightId);
  };

  const getChepeastCost = (origin, destination, departure) => {
    let filtered = filterFlights(origin, destination, departure);
    let cheapeastCost = filtered.reduce((minFlight, flight) => {
      return flight.cost < minFlight.cost ? flight : minFlight;
    }, filtered[0]);
    return cheapeastCost ? `$${cheapeastCost.cost}` : 'No hay vuelo';
  };

  const bookFlight = (trip, flightId, passengers) => {
    let flight = findFlightById(flightId);
    if (flight) {
      updateFlight(trip, {
        flightId: flightId,
        origin: flight.origin,
        destination: flight.destination,
        departure: formatTime(flight.departure),
        arrival: formatTime(flight.arrival),
        cost: flight.cost,
        passengers: passengers
      });
    }
  };

  return {
    flights,
    bookFlight,
    filterFlights,
    findFlightById,
    getChepeastCost
  };
};