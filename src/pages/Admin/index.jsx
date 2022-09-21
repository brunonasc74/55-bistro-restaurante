import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import { StyledAdmin } from './style';
import { useState, useEffect } from 'react';
import Data from './Data';
import AddItem from './AddItem';

const index = () => {
	const [cardapio, setCardapio] = useState([]);

	useEffect(() => {
		fetch(`https://restaurante-api-resilia.herokuapp.com/cardapios`)
			.then((res) => res.json())
			.then((data) => setCardapio(data));
	}, [cardapio]);

	const criarItem = async (item) => {
		await fetch(`https://restaurante-api-resilia.herokuapp.com/cardapios`, {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify(item)
		});
	};

	const deletarItem = async (id) => {
		await fetch(
			`https://restaurante-api-resilia.herokuapp.com/cardapios/${id}`,
			{ method: 'DELETE' }
		);
	};

	return (
		<ThemeProvider theme={theme}>
			<>
				<StyledAdmin>
					<div className='container'>
						<AddItem onAdd={criarItem} />
						{cardapio
							.slice(0)
							.reverse()
							.map((card, index) => {
								return (
									<Data
										key={index}
										id={card.id}
										nome={card.nome}
										categoria={card.categoria}
										descricao={card.descricao}
										imagem={card.imagem}
										preco={card.preco}
										edit={card.id}
										onDelete={deletarItem}
									/>
								);
							})}
					</div>
				</StyledAdmin>
			</>
		</ThemeProvider>
	);
};

export default index;
