import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import GlobalStyles from "../../components/styles/GlobalStyles";
import Card from './Card';
import Title from '../../components/Title';


function Cardapio () {
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
      <Title preTitle={"Bruna lidna"} mainTitle={"alou"} />
      <Card />
      </>     
    </ThemeProvider>
  )
}

export default Cardapio;