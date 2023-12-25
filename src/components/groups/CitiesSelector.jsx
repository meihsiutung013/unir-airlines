import React, { useState, useEffect } from 'react';
import { Select } from '../bases/Select';
import { cities, citiesForSelect, destinationsForSelect } from '../../mocks/cities';

export const CitiesSelector = ({ from, to, onChange }) => {

	const [origin, setOrigin] = useState(from);
	const [destination, setDestination] = useState(to);
	const [origins, setOrigins] = useState({});
	const [destinations, setDestinations] = useState({});

	useEffect(() => {
		setOrigin(from);
		setDestination(to);
	}, [from, to]);

	const handleOriginChange = (value) => {
		setOrigin(value);
		onChange('origin', value);
	};

	const handleDestinationChange = (value) => {
		setDestination(value);
		onChange('destination', value);
	};

	useEffect(() => {
		// Cargar lista de ciudades origen
		setOrigins(citiesForSelect(cities));
	}, []);

	useEffect(() => {
		// Actualizar lista de ciudades destino según origen seleccionado
		setDestinations(origin ? destinationsForSelect(origin) : {});
	}, [origin]);

	return (
		<div className='row gy-3'>
			{/* Selector de ciudad origen */}
			<div className='col-12 col-md'>
				<Select name='origin' label='Origen' options={origins} selectedOption={origin} onChange={handleOriginChange} />
			</div>
			{/* Selector de ciudad destino */}
			<div className='col-12 col-md'>
				<Select name='destinarion' label='Destino' options={destinations} selectedOption={destination} onChange={handleDestinationChange} />
			</div>
		</div>
	);
}