import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import GlobalStyles from '../../components/styles/GlobalStyles';
import Header from './Header';
import Review from './Review';
import Recipe from './Recipe';
import PreFooter from './PreFooter';

const Home = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<>
				<Header />
				<Review />
				<Recipe />
				<PreFooter />
			</>
		</ThemeProvider>
	);
};

export default Home;
