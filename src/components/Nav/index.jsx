import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { Container } from "./styleNav";
import { BsMoon, BsSun } from "react-icons/bs";

const Nav = () => {
  return (
    <nav>
      <Container>
        <Link to="/" className="logo">
          <h5>
            +55 <span>Bistrô</span>
          </h5>
        </Link>
        <ul>
          <Link to="/">Home</Link>
          <li>
            <Link to="/reserva">Reservas</Link>
          </li>
          <li>
            <Link to="/cardapio">Cardápio</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
        <div className="inc">
          <BsSun />
        </div>
      </Container>
    </nav>
  );


export default Nav;
