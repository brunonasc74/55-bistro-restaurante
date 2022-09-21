import React from 'react';
import Button from '../Button';

const Header = ({ onAdd, showAdd }) => {
	return (
		<header>
			<h1>
				<span>+55</span> Bistrô
			</h1>
			<Button
				color={showAdd ? '#fa3030' : '#1c881c'}
				text={showAdd ? 'Fechar' : 'Criar'}
				onClick={onAdd}
			/>
		</header>
	);
};

export default Header;
