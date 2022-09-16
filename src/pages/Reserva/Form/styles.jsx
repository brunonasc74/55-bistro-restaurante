import styled from "styled-components";


export const RightContainer = styled.div`
  grid-row: 2/3;
  grid-column: 2/3;
  background: url("");
  background-size: cover;
  left: 537px;
  background-repeat: no-repeat;
  position: absolute;
`;

export const FormContainer = styled.div`
  position: absolute;
  bottom: 15%;
  left: -10%;
  background: #342c24;

  .boxOne input {
    width: 50%;
  }

  .boxTwo input {
    width: 50%;
  }

  input {
    margin-bottom: 1rem;
    padding: 0.3rem 0.5rem;
    border-radius: 5px;
    background: #342c24;
    outline: 1px solid #dfae67;
    color: #a9a7a5;
    font-size: 1rem;
    color-scheme: dark;
  }
`;

export const ImgContainer = styled.div`
  line-height: 0;

  img {
    max-width: 800px;
    width: max(55vw, 360px);
    height: 220px;
    object-fit: cover;
  }
`;

export const FormInner = styled.div`
  margin-bottom: 1rem;
  padding: 0.3rem 0.5rem;

  button {
    padding: 1rem 2rem;
    font-size: 1rem;
    display: flex;
    align-items: center;
    border: none;
    gap: 0.8rem;
    font-weight: 600;
    background: #dfae67;
    cursor: pointer;
    transition: all ease-in-out 250ms;
    &:hover {
      background: #000000;
      span {
        color: #ffffff;
        fill: #dfae67;
      }
    }
  }
`;

export const Button = styled.div`
  padding: 1rem 2rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all ease-in-out 250ms;
  &:hover {
    background: black;
  }
`;

export const DateTime = styled.div`
  color: white;
`;
