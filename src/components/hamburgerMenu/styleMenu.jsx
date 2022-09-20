import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  color: white;
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.screen.sm}){
    display: none;
    width: 0;

  }


`
