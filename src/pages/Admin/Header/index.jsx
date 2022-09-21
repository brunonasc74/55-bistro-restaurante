import React from 'react';
import { StyledHeader } from './style';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<StyledHeader>
			<Link to={'/'} className='link'>
				<h1>
					<span>+55</span> Bistrô
				</h1>
				<p>Voltar para o site</p>
			</Link>
		</StyledHeader>
	);
};

export default Header;
