import React from 'react';
import { Logo } from '../bases/Logo';
import { Loader } from '../bases/Loader';
import { useRedirection } from '../../hooks/useRedirection';
import '../../styles/pages/Landing.css';

export const Landing = () => {

	let seconds = 10;

	useRedirection('/home', seconds * 1000);

	return (
		<div className='landing container-fluid gap-5'>
			<Logo isColored={false} width='w-300px' />
			<div className='text-white text-center'>
				<p className='display-4 fw-bold'>¡Bienvenidos a bordo!</p>
				<p className='fs-4'>Conectamos sueños y destinos. Tu viaje perfecto comienza con nosotros.</p>
			</div>
			<Loader seconds={seconds} />
		</div>
	);
}