import React from "react";
import { Link } from "react-router-dom";
import { Container } from './styleNav';
import {BsMoon, BsSun} from 'react-icons/bs';

const Nav = () => {
	return <nav>
			
			<Container>
				{/* <Link to='/'>+55 <span>Bistrô</span></Link> */}
				<a href="/." className="logo"><h5>+55 <span>Bistrô</span></h5></a>

			<ul>
				<li>
					<a href="">Home</a>
					{/* <Link to="/"></Link> */}
					</li>
				<li>
					<a href="">Reservas</a>
					{/* <Link to="/reservas"></Link> */}
				</li>
				<li>
					<a href="">Cardápio</a>
					{/* <Link to="/cardapio"></Link> */}
				</li>
				<li>
					<a href="">Contato</a>
					{/* <Link to="/Contato"></Link> */}
				</li>
			</ul>

			<div className="inc">

				<BsSun />

			</div>
			</Container>

		</nav>;
};

export default Nav;
