import { StyledButton } from "./style";

const Button = ({ content }) => {
  return (
    <StyledButton>
      <button>{content}</button>
    </StyledButton>
  );
};

export default Button
