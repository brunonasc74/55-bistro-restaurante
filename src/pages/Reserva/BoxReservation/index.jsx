import React from 'react';
import { StyledBoxReservation } from './style';

const BoxReservation = () => {
	return (
		<StyledBoxReservation>
			<div className='container'>
				<div className='inner'>
					<div className='leftContainer'>
						<div className='description'>
							<div className='title'>
								<h1>Reserva</h1>
								<h2>Faça seus eventos serem momentos especiais</h2>
							</div>
							<p>
								Reservando com antecedência você garante um lugar especial para
								você e seus convidados, além de uma cortesia especial da casa.
							</p>
						</div>
					</div>
				</div>
			</div>
		</StyledBoxReservation>
	);
};

export default BoxReservation;
