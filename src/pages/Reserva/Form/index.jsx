import React from "react";
// import Container from "../../../components/styles/Container";
import useForm from "./useForm";
import {
  RightContainer,
  ImgContainer,
  FormInner,
  DateTime,
  FormContainer
} from "./styles";

const BoxForm = () => {
  const name = useForm();
  const email = useForm("email");
  const cpf = useForm("cpf");
  const phone = useForm();

  function handleSubmit(e) {
    e.preventDefault();
    if (email.validate() && cpf.validate()) {
      console.log("enviar");
      alert("Enviado");
    } else {
      console.log("não enviar");
    }
  }

  return (
    // <Container>
    <RightContainer>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <ImgContainer>
            <img src="./public/images/restaurant.jpg" alt="restaurant" />
          </ImgContainer>

          <FormInner>

          <div className="boxOne">
            <input
              id="name"
              type="text"
              required
              placeholder="Nome"
              {...name}
            />

            <input
              id="cpf"
              type="text"
              required
              placeholder="CPF"
              {...cpf}
            />
          </div>

          <div className="boxTwo">
            <input type="email" required placeholder="Email" {...email} />

            <input
              type="tel"
              id="phone"
              required
              placeholder="Telefone" {...phone}
            />
          </div>

            <DateTime>
              <input type="date" />
              <input type="time" />
            </DateTime>

            <button>
              <span>Agendar</span>
            </button>

            </FormInner>
        </form>
      </FormContainer>
    </RightContainer>
    // </Container>

          // <RightContainer>
          //   <div className="formContainer">
          //   <form onSubmit={handleSubmit}>
          //     <div className="imgContainer">
          //       <img src="./public/images/restaurant.jpg" alt="imagem parte interna de um restaurante" />
          //     </div>

          //     <div className="formInner">
          //       <input type="name" className="name" required placeholder="Nome e sobrenome" />
          //       <div className="dateTime">
          //         <input type="date" className="date" />
          //         <input type="time" className="time"/>
          //       </div>

          //       <button>
          //         <span>Agendar</span>
          //       </button>
          //     </div>
          //   </form>
          //   </div>
          // </RightContainer>
      );
    };

export default BoxForm;
