import styled from "styled-components";

export const CardReverse = styled.div`
display: flex;
justify-content: space-between;
gap: 100px;
padding: 2rem;
margin-top: 1rem;


img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 3px solid #FF3A39;
}

@media (max-width: ${({ theme }) => theme.screen.sm}) {
  display: flex;
  flex-direction: column-reverse;
}
`