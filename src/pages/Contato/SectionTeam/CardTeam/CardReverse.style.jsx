import styled from "styled-components";

export const CardReverse = styled.div`
display: flex;
justify-content: space-between;
gap: 30px;
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

export const BoxText = styled.div`
background-color: #0d0d14;
padding: 4rem;
margin: auto;
border-radius: 4px;

h4 {
  font-size: 22px;
  color: #FF3A39;
}

.p-cardteam {
  font-size: 1.1rem;
  color: #fff;
}


@media (max-width: ${({ theme }) => theme.screen.sm}) {
  min-width: 500px;
  height: 250px;
  padding: 2rem;
}

h4 {
  font-size: 16px;
  color: #FF3A39;
}

.p-cardteam {
  font-size: 12px;
  color: #fff;
}

@media (max-width: ${({ theme }) => theme.screen.xs}) {
  min-width: 380px;
  height: 250px;
  padding: 2rem;
}

h4 {
  font-size: 16px;
  color: #FF3A39;
}

.p-cardteam {
  font-size: 12px;
  color: #fff;
}

@media(max-width: 400px) {
  min-width: 280px;
  height: 250px;
  padding: 2rem;

  h4 {
  font-size: 14px;
  color: #FF3A39;
}

.p-cardteam {
  font-size: 12px;
  color: #fff;
}
}


`