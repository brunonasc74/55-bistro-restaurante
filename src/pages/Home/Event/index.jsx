import { StyledEvent, Title } from "./style";
import CardEvent from "../CardEvent";

const Event = () => {
  return (
    <StyledEvent>
      <div className="container">
        <Title>
          <h1>Eventos</h1>
          <div className="wrapper">
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
          </div>
        </Title>
        <div className="flex">
          <CardEvent
            image="./images/events/1.jpg"
            title="Formatura Resilia"
            desc="Comemore com a Turma 19 - Geração Futuro (Stone + Resilia) a formatura do curso de Desenvolvimento Web Full Stack. Aproveite a noite para conhecer o melhor da culinária brasileira."
            date="06-09-2022"
            time="19:00"
            location="+55 Bistrô"
          />
          <CardEvent
            image="./images/events/1.jpg"
            title="Dia dos namorados"
            desc="Faça sua reserva para o dia dos namorados e ganhe um brinde especial nesta noite especial. Garanta um preço promocional para você e seu amor curtirem o melhor da gastronomia."
            date="12-06-2023"
            time="19:00"
            location="+55 Bistrô"
          />
        </div>
      </div>
    </StyledEvent>
  );
};

export default Event;