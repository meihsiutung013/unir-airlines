import { isEqual } from "./dates";

export const getFlights = (flights, origin, destination, departure) => {
  let list = flights.filter((flight) => {
    return flight.origin === origin &&
           flight.destination === destination &&
           isEqual(departure, flight.departure);
  });
  return list;
}

export const findFlightById = (flights, flightId) => {
  return flights.find(flight => flight.id === flightId);
}

export const getChepeastCost = (flights, origin, destination, departure) => {
  // Filtrar vuelos según el origen, destino y fecha de partida
  let filtered = getFlights(flights, origin, destination, departure);
  // Encontrar el vuelo con el costo más bajo
  let cheapeastCost = filtered.reduce((minFlight, flight) => {
    return flight.cost < minFlight.cost ? flight : minFlight;
  }, filtered[0]);
  // Si no hay vuelos, devolver null
  return cheapeastCost ? cheapeastCost.cost : null;
}