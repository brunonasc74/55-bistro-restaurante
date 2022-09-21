import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import { StyledAdmin } from './style';
import Data from './Data';
import { useState, useEffect } from 'react';

const index = () => {
	const [cardapio, setCardapio] = useState([]);

	useEffect(() => {
		fetch('https://restaurante-api-resilia.herokuapp.com/cardapios')
			.then((res) => res.json())
			.then((data) => setCardapio(data));
	}, [cardapio]);

	const deletarTask = async (id) => {
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
						{cardapio.map((card, index) => {
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
									onDelete={deletarTask}
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
