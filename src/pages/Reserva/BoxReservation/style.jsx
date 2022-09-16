import styled from "styled-components";


export const Contaiiner = styled.div`
/* width: 1000px; */
/* max-width: 1600px; */
padding: 7px 10px;
margin: 0 auto;
`;


export const StyledBoxReservation = styled.div`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100px 400px;

  p {
    font-size: 1rem;
    max-width: 450px;
  }
`;

export const LeftContainer = styled.div`
  grid-row: 1/3;
  grid-column: 1/2;
  background: url("./public/images/bgfood.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  &::after {
    content: "";
    position: absolute;
    z-index: 0;
    top: 0%;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    height: 100%;
    width: 100%;
  }
`;

export const Description = styled.div`
  position: relative;
  z-index: 1;
  padding: 1rem;
  margin-right: 2rem;
`;

export const Title = styled.div`
  h1 {
    font-family: "Architects Daughter", cursive;
    margin-bottom: 1.2rem;
    font-size: 1.8rem;
  }

  h2 {
    color: whitesmoke;
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;
