import styled from "styled-components";


export const Contaiiner = styled.div`
padding: 0 10px;
margin: 0 auto;
`;


export const StyledBoxReservation = styled.div`
  margin-top: 3rem;
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
    font-family: 'Poppins', sans-serif;
    margin-bottom: 1.2rem;
    font-size: 1.8rem;
    /* color:#FF3A39; */
  }

  h2 {
    color: #FFFF;
    font-size: 2.4rem;
    margin-bottom: 1rem;
    color:#FF3A39;
    font-family: 'Dancing Script', cursive;
  }
`;
