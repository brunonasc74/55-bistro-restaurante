import React from 'react';
import BoxReservation from './BoxReservation';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../components/styles/GlobalStyles';
import theme from '../../theme';
import BoxForm from './Form';

const Reserva = () => {

	return (
	
	<ThemeProvider theme={theme}>
	<GlobalStyles />
	<>
		<BoxReservation />
		<BoxForm />
	</>

	</ThemeProvider>
	)
};

export default Reserva;
