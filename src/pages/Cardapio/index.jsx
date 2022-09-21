import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import GlobalStyles from "../../components/styles/GlobalStyles";
import Card from "./Card";
import Title from "../../components/Title";
import Selector from "../Cardapio/Selector";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";


function Cardapio() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <>
        <Title preTitle={"Seleção especial"} mainTitle={"do nosso menu"} />
        <Selector
          icon={
            "https://i.pinimg.com/originals/94/ee/2f/94ee2fda4931c26b3c55ed23d28e885e.png"
          }
        />
      </>
    </ThemeProvider>
  );
}

export default Cardapio;
