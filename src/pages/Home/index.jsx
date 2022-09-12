import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import GlobalStyles from '../../components/styles/GlobalStyles';
import Header from './Header';

const Home = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<>
				<Header />
			</>
		</ThemeProvider>
	);
};

export default Home;
