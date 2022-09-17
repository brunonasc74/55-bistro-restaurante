import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import GlobalStyles from "../../components/styles/GlobalStyles";
import { Section } from "./style";

const NotFound = () => {
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
            <button>Volte para home</button>
          </div>
        </Section>
      </>
    </ThemeProvider>
  );
};

export default NotFound;
