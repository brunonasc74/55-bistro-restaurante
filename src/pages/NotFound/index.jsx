import GlobalStyles from "../../components/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import { Section } from "./style";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <>
        <Section class="page_404">
          <div class="box">
            <div>Fechado !</div>
            <p>
              <span>error 404 !</span> Ops, essa página não existe!
            </p>
            <button onClick={() => navigate('/')}>Volte para home</button>
          </div>
        </Section>
      </>
    </ThemeProvider>
  );
};

export default NotFound;
