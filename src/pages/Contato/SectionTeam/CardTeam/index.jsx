import { ThemeProvider } from "styled-components";
import theme from "../../../../theme";
import GlobalStyles from "../../../../components/styles/GlobalStyles";
import { Card, ContainerCard, BoxIcons, BoxText } from "./style";
import { FaTwitter } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";

const CardTeam = ({ image, name, role, github, linkedin, twitter, text }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <>
        <Card>
          <ContainerCard>
            <div>
              <img src={image} alt="" />
            </div>
            <p>{name}</p>
            <span>{role}</span>
            <BoxIcons>
              <a target="_blank" href={github}>
                <AiFillGithub className="icon" />
              </a>
              <a target="_blank" href={linkedin}>
                <ImLinkedin className="icon" />
              </a>
              <a target="_blank" href={twitter}>
                <FaTwitter className="icon" />
              </a>
            </BoxIcons>
          </ContainerCard>
          <BoxText>
            <h4>Um pouco sobre mim..</h4>
            <p>{text}</p>
          </BoxText>
        </Card>
      </>
    </ThemeProvider>
  );
};

export default CardTeam;
