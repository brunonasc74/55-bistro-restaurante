import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import GlobalStyles from '../../components/styles/GlobalStyles';
import { Animation, Container, Box} from './style';

const Contato = () => {
	return (
   <ThemeProvider theme={theme}>
    <GlobalStyles/>
		 <>
		 <Container>
			<Box>
			<h1>Conheça nossa equipe</h1>
		 <Animation>
		 </Animation>
			</Box>
			<p>Para que fosse possível realizar esse projeto contamos com um time de profissionais
         incríveis. Somos um time de desenvolvedores apaixonados por tecnologia.</p>
		 </Container>
		 </>
    </ThemeProvider>
	)
};

export default Contato;
