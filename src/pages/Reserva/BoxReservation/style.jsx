import styled from "styled-components";


export const StyledBoxReservation = styled.div`
  .container {
    max-width: 1600px;
    @media screen and (min-width: 1600px) {
      margin: 0 auto;
    }
  }

  .inner {
    margin-top: 5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100px 400px;
    @media screen and (max-width: 700px) {
      display: flex;
      flex-direction: column;
      grid-template-rows: unset;
      grid-template-columns: unset;
      gap: 2rem;
    }
  }

  .leftContainer {
    grid-row: 1/3;
    grid-column: 1/2;
    background: url("/public/images/bgfood.jpg");
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
    .description {
      position: relative;
      z-index: 1;
      padding: 1rem;
      margin-right: 2rem;
      @media screen and (max-width: 700px) {
        width: 100%;
        margin-right: 0;
        margin: 2rem 0;
        text-align: center;
      }
      .title {
        h1 {
          color: #ffffff;
          font-family: "Poppins", sans-serif;
          margin-bottom: 1.2rem;
          font-size: 1.8rem;
        }
        h2 {
          color: #ff3a39;
          font-size: 2.3rem;
          margin-bottom: 1rem;
          font-family: "Dancing Script", cursive;
        }
      }
      p {
        font-size: 1rem;
        max-width: 450px;
        color: #FFFFFF;
        @media screen and (max-width: 700px) {
          max-width: unset;
        }
      }
    }
  }
`;
