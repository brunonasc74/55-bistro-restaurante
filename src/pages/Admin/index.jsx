import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import GlobalStyles from '../../components/styles/GlobalStyles';
import Container from '../../components/styles/Container';

const index = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<>
				<Container>
					<div>admin</div>
				</Container>
			</>
		</ThemeProvider>
	);
};

export default index;
