import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../../components/styles/GlobalStyles';
import theme from '../../../theme';
import CardTeam from './CardTeam';
import CardTeamReverse from './CardTeam/cardTeamReverse';
import { Container, Box, BoxReverse } from './style';

const SectionTeam = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<>
				<Container>
					<Box>
						<CardTeam
							image='./images/Bruno.jpg'
							name='Bruno Nascimento'
							role='Desenvolvedor(a) Fullstack'
							github='https://github.com/brunonasc74'
							linkedin='https://www.linkedin.com/in/brunohpn/'
							text='Sou do interior de Minas Gerais. Um desenvolvedor web que ama aprender novas coisas todos os dias que também gosta de desenvolvimento mobile. Atualmente aprendendo mais sobre React. Sinta-se à vontade para entrar em contato comigo a qualquer hora.'
						/>
					</Box>
					<Box>
						<CardTeamReverse
							image='./images/shiellyn.jpeg'
							name='Shiellyn Ferreira'
							role='Desenvolvedor(a) Fullstack'
							github='https://github.com/ShiellynFerr'
							linkedin='https://www.linkedin.com/in/shiellyn-ferreira/'
							text='Meu nome é Shiellyn, tenho 20 anos e sou da cidade de Guarulhos - SP. Desde pequena sempre fui o tipo de pessoa que se interessava por diversos assuntos, muito curiosa, criativa e disposta a aprender coisas novas e acredito que ser assim foi o que me fez chegar até a área da tecnologia.'
						/>
					</Box>
					<Box>
						<CardTeam
							image='./images/Bruna.jfif'
							name='Bruna Xavier'
							role='Desenvolvedor(a) Fullstack'
							github='https://github.com/bruxvr'
							linkedin='https://www.linkedin.com/in/brunarxavier/'
							text='Apaixonada por aprender e por descobrir que ainda há muito a ser aprendido. Sou uma recém entusiasta na tecnologia, e escolher o desenvolvimento web para investir tempo e empenho foi uma das minhas decisões mais acertadas. Tem sido uma das experiências mais incríveis e desafiadoras nessa transição de carreira. Não me arrependo nem por um segundo – em especial quando tenho resultados gratificantes como esse projeto.'
						/>
					</Box>
					<Box>
						<CardTeamReverse
							image='./images/kelly.jfif'
							name='Kelly Santos'
							role='Desenvolvedor(a) Fullstack'
							github='https://github.com/KellySanttos'
							linkedin='https://www.linkedin.com/in/kellysanttos/'
							text='Eu sou Kelly, uma menina sonhadora e intensa. Estou em constante evolução, me interesso e sempre encontro-me disposta a novos conhecimentos.
              Dificilmente sou surpreendida por algo, pois planejo cuidadosamente os passos que vou dar e analiso os riscos antes de tomar decisões.'
						/>
					</Box>
					<Box>
						<CardTeam
							image='./images/arthur.jfif'
							name='Artur Tolentino'
							role='Desenvolvedor(a) Fullstack'
							github='https://github.com/ArturTolentino'
							linkedin='https://www.linkedin.com/in/artur-rodrigues-tolentino/'
							text='Meu nome é Artur, tenho 21 anos e sou do Norte de Minas Gerais. Gosto bastante de tecnologia e me interesso por diversas áreas.'
						/>
					</Box>
				</Container>
			</>
		</ThemeProvider>
	);
};

export default SectionTeam;
