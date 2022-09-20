import React from 'react';
import { Link } from 'react-router-dom';

const LinksMenu = () => {
	return (
		<div className='list'>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/reserva'>Reservas</Link>
				</li>
				<li>
					<Link to='/cardapio/menu'>Cardápio</Link>
				</li>
				<li>
					<Link to='/contato'>Contato</Link>
				</li>
			</ul>
		</div>
	);
};

export default LinksMenu;
