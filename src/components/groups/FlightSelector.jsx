import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useFlights } from '../../hooks/useFlights';
import { useItineraryForm } from '../../context/ItineraryFormContext';
import { formatTime } from '../../utils/dates';

export const FlightSelector = ({ type }) => {

	const { color } = useTheme();
	const { formData } = useItineraryForm();
  const { filterFlights, bookFlight } = useFlights();
	const [trip, setTrip] = useState(type); // departure, return

	useEffect(() => {
		setTrip(type);
	}, [type]);

  const booking = (flightId) => {
		const allButtons = document.querySelectorAll(`.${trip}-button.active`);
		allButtons.forEach((btn) => {
			btn.classList.remove('active');
		});
		if (flightId) {
			const button = document.querySelector(`.button-${flightId}`);
			button.classList.add('active');
			bookFlight(trip, flightId, formData.passengers);
		}
  };

	return (
		<div>

			<div className='row justify-content-center'>
				<div className='col-12 col-md-11'>

					<div className='card shadow mb-4'>
						<div className={`card-body text-bg-${color} text-center`}>
							<span className='fw-bold fs-5'>{trip === 'departure' ? 'IDA' : 'VUELTA'}</span>
							<br />
							<span className='fw-bold'>{trip === 'departure' ? formData.departureDay : formData.returnDay}</span>
						</div>
					</div>

					{
						filterFlights(
							formData.origin,
							formData.destination,
							trip === 'departure' ? formData.departureDate : formData.returnDate
						).map((flight, index) => (
							<div key={flight.id} className='card shadow mb-3'>
								<div className='card-body'>
									<div className='row'>

										<div className='col-12 col-md-6'>
											<div className='d-flex align-items-center text-center gap-3'>
												{/* Departure Time */}
												<div>
													<div className='fw-bold'>{formatTime(flight.departure)}</div>
													<small>{flight.origin}</small>
												</div>
												<div><i className='fa-solid fa-plane-departure'></i></div>
												{/* Line */}
												<div className='min-w-95px pt-4'>
													<div className='border-top'>
														<small className='px-3'>directo</small>
													</div>
												</div>
												<div><i className='fa-solid fa-plane-arrival'></i></div>
												{/* Arrival Time */}
												<div>
													<div className='fw-bold'>{formatTime(flight.arrival)}</div>
													<small>{flight.destination}</small>
												</div>
											</div>
										</div>

										<div className='col-12 col-md-6'>
											<div className='d-flex justify-content-end'>
												<button
													type='button'
													className={`btn btn-lg btn-outline-primary ${trip}-button button-${flight.id}`}
													data-bs-toggle='button'
													onClick={() => booking(flight.id)}
												>
													{`$ ${flight.cost.toFixed(2)}`}
												</button>
											</div>
										</div>

									</div>
								</div>
							</div>
						))
					}

				</div>
			</div>

		</div>
	);
}