import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import GlobalStyles from '../../components/styles/GlobalStyles';
import Header from './Header';
import About from './About';
import Gallery from './Gallery';
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
				<Gallery />
				<Review />
				<Event />
				<Recipe />
				<PreFooter />
			</>
		</ThemeProvider>
	);
};

export default Home;
