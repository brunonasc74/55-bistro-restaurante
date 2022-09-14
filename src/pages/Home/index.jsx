import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import GlobalStyles from '../../components/styles/GlobalStyles';
import Header from './Header';
import Review from './Review';
import Recipe from './Recipe';

const Home = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<>
				<Header />
				<Review />
				<Recipe />
			</>
		</ThemeProvider>
	);
};

export default Home;
