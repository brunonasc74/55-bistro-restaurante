import React from "react";
// import Container from "../../../components/styles/Container";
import useForm from "./useForm";
import {
  RightContainer,
  ImgContainer,
  FormInner,
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
    
    <RightContainer>
      {/* <div className="background">
        <img src="/public/images/bg1.jpg" alt="" />
      </div> */}
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

              <input id="cpf" type="text" required placeholder="CPF" {...cpf} />
            </div>

            <div className="boxTwo">
              <input type="email" required placeholder="Email" {...email} />

              <input
                type="tel"
                id="phone"
                required
                placeholder="Telefone"
                {...phone}
              />
            </div>


            <div className="DateTime">
              <input type="date" />
              <input className="Time" type="time" />
            </div>

            <button>
              <span>Agendar</span>
            </button>
            
          </FormInner>
        </form>
      </FormContainer>
    </RightContainer>
    // </Container>
  );
    };

export default BoxForm;
