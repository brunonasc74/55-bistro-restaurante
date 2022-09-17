import React from 'react';
import Container from '../../../components/styles/Container';
import { StyledBoxReservation, LeftContainer, Description, Title } from './style';

const BoxReservation = () => {
  return (



    <Container>
      <StyledBoxReservation>
        <LeftContainer>
          <Description>
            <Title>
              <h1>Reservation</h1>
              <h2>Make a Romantic Atmosphere Here</h2>
            </Title>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem iure
              tempore eius suscipit fugit nam?
            </p>
          </Description>
        </LeftContainer>
      </StyledBoxReservation>
    </Container>
  )
};


export default BoxReservation;