import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import GlobalStyles from "../../components/styles/GlobalStyles";
import { StyledCard } from 'style';

const Card = ({image, name, price, desc}) => {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div className="card">
            <div className="card-image">
              <img src={image} alt="{name}" />
            </div>
            <div className="card-content">
              <p className="card-name">{name}</p>
              <p className="card-price">{price}</p>
              <p className="card-desc">{desc}</p>
          </div>
        </div>
      </ThemeProvider>
    );
  };
  
  export default Card;

