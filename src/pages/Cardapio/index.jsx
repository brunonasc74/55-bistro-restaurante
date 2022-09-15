import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import GlobalStyles from "../../components/styles/GlobalStyles";
import { StyledCardapio } from 'style';
import Card from './Card';


export function Cardapio () {
  const [food, setFood] = useState([]);
  const url = `${aksjmokfl}`

  const getApi = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setFood(data);
  };

  return (
    <StyledCardapio>
      
    </StyledCardapio>
  )
}
