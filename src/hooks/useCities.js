import { useState, useEffect } from 'react';
import { cities as data } from '../mocks/cities';

export const useCities = () => {

  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setCities(data);
    };
    fetchCities();
  }, []);

  const getCountries = () => {
    const countries = new Set();
    cities.forEach((city) => {
      countries.add(city.country);
    });
    const list = Array.from(countries);
    return list;
  };

  return {
    cities,
    getCountries
  };
};