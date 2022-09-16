import React from 'react';
// import Container from '../../../components/styles/Container';
import { Description, LeftContainer, StyledBoxReservation, Title, Contaiiner } from './style';

const BoxReservation = () => {
  return (
    <Contaiiner>
      <StyledBoxReservation>
        <LeftContainer>
          <Description>
            <Title>
              <h1>Reserva</h1>
              <h2>Tenha um encontro romântico</h2>
            </Title>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem iure
              tempore eius suscipit fugit nam?
            </p>
          </Description>
        </LeftContainer>
      </StyledBoxReservation>
    </Contaiiner>
  );
};

export default BoxReservation;