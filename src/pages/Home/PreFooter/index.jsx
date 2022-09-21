import { StyledPreFooter } from "./style";
import { Link } from "react-router-dom";

const PreFooter = () => {
  return (
    <StyledPreFooter>
      <div>
        <h1>Nós Fazemos Comidas Nutritivas&nbsp;e&nbsp;Deliciosas</h1>
        <a href="/reserva">
          <button>Reserve uma mesa agora</button>
        </a>
      </div>
    </StyledPreFooter>
  );
};

export default PreFooter;
