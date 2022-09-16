import React from "react";
import CardAbout from "../CardAbout";
import { BoxCards, Container, Title} from "./style";

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
         <BoxCards>
         <CardAbout
        number="01"
        title="Bem localizado"
        desc="Descrição do motivo por que seu restaurante
        é o melhor.descrição do motivo por que seu restaurante
        é o melhor"
        />
         <CardAbout
        number="02"
        title="O melhor preço"
        desc="Descrição do motivo por que seu restaurante
        é o melhor.descrição do motivo por que seu restaurante
        é o melhor"
        />
         <CardAbout
        number="03"
        title="Menu"
        desc="Descrição do motivo por que seu restaurante
        é o melhor.descrição do motivo por que seu restaurante
        é o melhor"
        />
         </BoxCards>
      </Container>
    </>
  )
};


export default About;
