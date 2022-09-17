import { ThemeProvider } from "styled-components";
import theme from "../../../../theme";
import GlobalStyles from "../../../../components/styles/GlobalStyles";
import { Card, ContainerCard, BoxIcons, BoxText } from "./style";
import { CardReverse } from "./CardReverse.style";
import { FaTwitter } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";

const CardTeamReverse = ({ image, name, role, github, linkedin, twitter, text }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <>
        <CardReverse>
          <BoxText>
            <h4>Um pouco sobre mim..</h4>
            <p className="p-cardteam">{text}</p>
          </BoxText>
          <ContainerCard>
            <div>
              <img src={image} alt="" />
            </div>
            <p>{name}</p>
            <span>{role}</span>
            <BoxIcons>
              <a href={github}>
                <AiFillGithub className="icon" />
              </a>
              <a href={linkedin}>
                <ImLinkedin className="icon" />
              </a>
              <a href={twitter}>
                <FaTwitter className="icon" />
              </a>
            </BoxIcons>
          </ContainerCard>
        </CardReverse>
      </>
    </ThemeProvider>
  );
};

export default CardTeamReverse;
