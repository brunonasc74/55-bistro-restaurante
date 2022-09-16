import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import GlobalStyles from '../../components/styles/GlobalStyles';
import Header from './Header';
<<<<<<< HEAD
import About from './About'
=======
import About from './About';
>>>>>>> 7bb59f9d02588252c0ad10c0a9cedc22da43c76e
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
<<<<<<< HEAD
			  <About />
=======
				<About />
>>>>>>> 7bb59f9d02588252c0ad10c0a9cedc22da43c76e
				<Review />
				<Event />
				<Recipe />
				<PreFooter />
			</>
		</ThemeProvider>
	);
};

export default Home;
