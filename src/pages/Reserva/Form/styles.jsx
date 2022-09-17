import styled from "styled-components";


export const RightContainer = styled.div`
  grid-row: 2/3;
  grid-column: 2/3;
  background-size: cover;
  margin: -25px 0 0 630px;
  background-repeat: no-repeat;
  position: relative;
  @media screen and (max-width: 700px) {
  background: none;
    }

  /* .background {
    position: absolute;
    bottom: -43px;
    left: -15px;
  } */
`;

export const FormContainer = styled.div`
  position: absolute;
  bottom: 100%;
  left: -10%;
  background: #080B10;
  @media screen and (max-width: 700px) {
            position: relative;
            bottom: unset;
            left: unset;
  }

  .boxOne input {
    width: 49.5%;
    margin-left: 3px;
    height: 35px;
  }

  .boxTwo input {
    padding: px;
    width: 49.5%;
    margin-left: 3px;
    height: 35px;
  }

  input {
    border: 0;
    margin-bottom: 0.7rem;
    padding: 0.3rem 0.5rem;
    margin-top: 7px;
    border-radius: 5px;
    background: #111419;
    outline: 1px solid #FF3A39;
    color: #a9a7a5;
    font-size: 1rem;
    color-scheme: dark;
  }
`;

export const ImgContainer = styled.div`
  line-height: 0;

  img {
    max-width: 700px;
    width: max(52vw, 360px);
    height: 220px;
    object-fit: cover;
  }
  @media screen and (max-width: 700px) {
    width: 100%;
    height: 250px;
  }
`;

export const FormInner = styled.div`
  margin-bottom: 1rem;
  padding: 0.3rem 0.5rem;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
  
  .DateTime {
    margin-left: 3px;
  }

  .Time {
    height: 31px;
    margin-left: 3px;
  }

  button {
    padding: 1rem 2rem;
    font-size: 1rem;
    display: flex;
    border-radius: 5px;
    margin-left: 5px;
    color: #ffffff;
    align-items: center;
    border: none;
    gap: 0.8rem;
    font-weight: 600;
    background: #ff3a39;
    cursor: pointer;
    transition: all ease-in-out 250ms;
    /* &:hover {
      background: #000000;
      span {
        color: #FF3A39;
      }
    } */
  }
`;
