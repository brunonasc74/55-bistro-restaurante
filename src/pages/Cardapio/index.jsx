import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import GlobalStyles from "../../components/styles/GlobalStyles";
const Cardapio = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <>
        <p>X pro Magnus do passado pegar</p>
      </>
    </ThemeProvider>
  );
};

export default Cardapio;
