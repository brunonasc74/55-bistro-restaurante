import { ThemeProvider } from "styled-components";
import theme from "../../../theme";
import GlobalStyles from "../../../components/styles/GlobalStyles";
import { BoxIcons, Card, ProfileBox } from "./style";
import { FaTwitter } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";

const CardContato = ({ name, role, image, src }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <>
        <Card>
          <ProfileBox>
            <h4>Shiellyn Bruna</h4>
            <span>Desenvolvedor(a) Web</span>
            <img src="../../../../public/images/shiellyn-2.jpeg" alt="" />
            <BoxIcons>
              <AiFillGithub className="icon" />
              <ImLinkedin className="icon" />
              <FaTwitter className="icon" />
            </BoxIcons>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat porro unde, et facere ad autem consequatur quo, deserunt ipsam, a reprehenderit labore nobis? Quibusdam a illum, quos id quas laborum.</p>
          </ProfileBox>
        </Card>
      </>
    </ThemeProvider>
  );
};

export default CardContato;
