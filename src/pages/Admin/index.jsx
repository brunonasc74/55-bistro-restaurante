import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import GlobalStyles from '../../components/styles/GlobalStyles';
import Container from '../../components/styles/Container';
import Data from './Data';
import { useState, useEffect } from 'react';

const index = () => {
	const [cardapio, setCardapio] = useState([]);

	useEffect(() => {
		fetch('https://restaurante-api-resilia.herokuapp.com/cardapios')
			.then((res) => res.json())
			.then((data) => {
				setCardapio(data);
			});
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<>
				<Container>
					{cardapio.map((card, index) => {
						return (
							<Data
								key={index}
								nome={card.nome}
								categoria={card.categoria}
								descricao={card.descricao}
								imagem={card.imagem}
								preco={card.preco}
							/>
						);
					})}
				</Container>
			</>
		</ThemeProvider>
	);
};

export default index;
