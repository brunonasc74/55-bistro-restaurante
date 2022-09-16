import styled from "styled-components";

export const Card = styled.div`
width: 400px;
height: 280px;
border-radius: 10px;
padding: 1rem;
background-color: #0d0d14;
display: flex;
flex-direction: column;
justify-content: center;

span {
  font-size: 30px;
  font-weight: bold;
  color: #ff3a39;
}

h4 {
  font-size: 22px;
}

 p {
  text-align: left;
  font-size: 16px;
 }

 @media (max-width: ${({ theme }) => theme.screen.xs}) {
  span {
  font-size: 20px;
  font-weight: bold;
  color: #ff3a39;
}

h4 {
  font-size: 18px;
}

 p {
  text-align: left;
  font-size: 14px;
 }

 width: 300px;
 height: 250px;
 }
`