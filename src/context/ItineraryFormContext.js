import React, { createContext, useState, useContext } from 'react';
import { getCityNameByCode } from '../mocks/cities';
import { isBefore, isBeforeToday, formatDate } from '../utils/dates';

export const ItineraryFormContext = createContext();

export const ItineraryFormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    isOneWayTrip: false,
    origin: null,           // código de ciudad origen
    originCity: null,       // nombre de ciudad origen
    destination: null,      // código de ciudad destino
    destinationCity: null,  // nombre de ciudad destino
    departureDate: null,    // fecha de salida (date)
    departureDay: null,     // fecha de salida en formato "weekday day/month"
    returnDate: null,       // fecha de retorno (date)
    returnDay: null,        // fecha de retorno en formato "weekday day/month"
    passengers: 1,
    isHidden: false
  });

  const isEmpty = () => {
    let empty =
      (formData.isOneWayTrip === false) &&
      (formData.origin === null) &&
      (formData.destination === null) &&
      (formData.departureDate === null) &&
      (formData.returnDate === null) &&
      (formData.passengers === 1);
    return empty;
  };

  const resetForm = () => {
    updateFormData('isOneWayTrip', false);
    updateFormData('origin', null);
    updateFormData('departureDate', null);
    updateFormData('returnDate', null);
    updateFormData('passengers', 1);
    updateFormData('isHidden', false);
  };

  const updateFormData = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
    if (field === 'origin') {
      updateFormData('originCity', getCityNameByCode(value));
      updateFormData('destination', null);
    } else if (field === 'destination') {
      updateFormData('destinationCity', getCityNameByCode(value));
    } else if (field === 'departureDate') {
      updateFormData('departureDay', formatDate(value));
      if (isBefore(formData.returnDate, value)) {
        updateFormData('returnDate', value);
      }
      if (value && isBeforeToday(value)) {
        updateFormData('departureDate', new Date());
      }
    } else if (field === 'returnDate') {
      updateFormData('returnDay', formatDate(value));
      if (isBefore(value, formData.departureDate)) {
        updateFormData('returnDate', formData.departureDate);
      }
      if (value && isBeforeToday(value)) {
        updateFormData('returnDate', new Date());
      }
    } else if (field === 'isOneWayTrip' && value === true) {
      updateFormData('returnDate', null);
    }
  };

  return (
    <ItineraryFormContext.Provider value={{ formData, updateFormData, isEmpty, resetForm }}>
      {children}
    </ItineraryFormContext.Provider>
  );
};

export const useItineraryForm = () => {
  const context = useContext(ItineraryFormContext);
  if (!context) {
    throw new Error('useItinerary must be used within a ItineraryFormProvider');
  }
  return context;
};