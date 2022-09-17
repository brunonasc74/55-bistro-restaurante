import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import GlobalStyles from '../../components/styles/GlobalStyles';
import Header from './Header';
import About from './About';
import Review from './Review';
import Event from './Event';
import Recipe from './Recipe';
import PreFooter from './PreFooter';

const Home = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<>
				<Header />
				<About />
				<Review />
				<Event />
				<Recipe />
				<PreFooter />
			</>
		</ThemeProvider>
	);
};

export default Home;
