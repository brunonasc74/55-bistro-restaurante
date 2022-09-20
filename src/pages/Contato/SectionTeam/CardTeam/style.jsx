import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  padding: 2rem;
  margin-top: 1rem;

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 3px solid #ff3a39;
  }

  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    display: flex;
    flex-direction: column;
  }

`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  span {
    display: block;
    font-size: 14px;
  }

`;
export const BoxIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff3a39;
  border-radius: 3px;
  width: 280px;
  height: 45px;
  margin-top: 1rem;

  .icon {
    margin: 5px;
    color: #fff;
    cursor: pointer;
    width: 40px;
    height: 25px;
    transition: all 1s ease-out;
  }

  .icon:hover {
    margin: 5px;
    color: #111419;
    cursor: pointer;
  }
`;

export const BoxText = styled.div`
  background-color: #0d0d14;
  padding: 4rem;
  margin: auto;
  border-radius: 4px;
  width: 900px;

  h4 {
    font-size: 22px;
    color: #ff3a39;
  }

  p {
    font-size: 1.2rem;
    color: #fff;
    text-align: justify;
  }

  @media (max-width: ${({ theme }) => theme.screen.lg}) {
    width: 600px;
    height: 250px;
  }

  @media (max-width: 850px) {
    width: 460px;
    height: 230px;
    padding: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    width: 380px;
    height: 250px;
    padding: 2rem;
  }

  h4 {
    font-size: 16px;
    color: #ff3a39;
  }

  p {
    font-size: 12px;
    color: #fff;
  }

  @media (max-width: ${({ theme }) => theme.screen.xs}) {
    width: 300px;
    height: 280px;
    padding: 2rem;
  }

  h4 {
    font-size: 16px;
    color: #ff3a39;
  }

  p {
    font-size: 12px;
    color: #fff;
  }

  @media (max-width: 450px) {
    min-width: 300px;
    min-height: 280px;

    h4 {
      font-size: 14px;
      color: #ff3a39;
    }

    p {
      font-size: 12px;
      color: #fff;
    }
  }

  /* @media (max-width:) {

  } */
`;
