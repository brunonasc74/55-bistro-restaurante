import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import GlobalStyles from "../../components/styles/GlobalStyles";
import Card from "./Card";
import Title from "../../components/Title";
import Selector from "../Cardapio/Selector";

function Cardapio() {
  // const [food, setFood] = useState([]);
  // const url = `${aksjmokfl}`

  // const getApi = async () => {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   setFood(data);
  // };

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
        <Card />
      </>
    </ThemeProvider>
  );
}

export default Cardapio;
