import React from "react";
import useForm from "./useForm";
import {
  StyledBoxForm, Box
} from "./styles";
import Input from "../Input";

const BoxForm = () => {
  const name = useForm();
  const email = useForm("email");
  const cpf = useForm("cpf");
  const phone = useForm();

  function handleSubmit(e) {
    e.preventDefault();
    if (email.validate() && cpf.validate()) {
      console.log("enviar");
      alert("Reserva enviada");
    } else {
      console.log("não enviar");
    }
  }

  return (
    <StyledBoxForm>
    <div className="rightContainer">
          <div className="formContainer">
            <form onSubmit={handleSubmit}>
              <div className="imgContainer">
                <img src="/public/images/restaurant.jpg" alt="restaurant" />
              </div>
              <div className="formInner">

                <Box>
                <div className="InputBox">
                <Input className="name" type="name" required placeholder="Nome" {...name} />
                <Input className="cpf" type="text" required placeholder="CPF" {...cpf} />
                  </div>

                  <div className="InputBox">
                <Input className="email" type="email" required placeholder="Email" {...email} />
                <Input className="phone" type="tel" required placeholder="Telefone" {...phone} />
                </div>
                </Box>

                <div className="dateTime">
                  <input className="date" type="date" />
                  <input className="time" type="time" />
                </div>

                <button>
                  <span>Agendar</span>
                </button>
              </div>
            </form>
          </div>
        </div>
        </StyledBoxForm>
  );
    };

export default BoxForm;
