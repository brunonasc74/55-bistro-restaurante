import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import GlobalStyles from '../../components/styles/GlobalStyles';
import Header from './Header';
import Review from './Review';
import Recipe from './Recipe';
import PreFooter from './PreFooter';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';


const Home = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<>
				<Nav/>
				<Header />
				<Review />
				<Recipe />
				<PreFooter />
				<Footer />
			</>
		</ThemeProvider>
	);
};

export default Home;
