import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import GlobalStyles from '../../components/styles/GlobalStyles';
import Container from '../../components/styles/Container';

const Home = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<>
				<Container>
					<div>Home</div>
				</Container>
			</>
		</ThemeProvider>
	);
};

export default Home;
