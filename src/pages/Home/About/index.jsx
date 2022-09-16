import React from "react";
import CardAbout from "../CardAbout";
import { Container, Title} from "./style";

const About = () => {
  return (
    <>
      <Container>
      <Title>
      <h1>Por que escolher</h1>
			<h3>nosso restaurante</h3>
			<div className='wrapper'>
				<div className='square'></div>
				<div className='square'></div>
				<div className='square'></div>
			</div>
      </Title>
        <p className='p-about'>
          Um dos restaurantes mais bem localizados da cidade, estacionamento
          próprio, alimentos frescos e de qualidade.
        </p>

        <CardAbout/>
      </Container>
    </>
  )
};


export default About;
