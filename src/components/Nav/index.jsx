import React from "react";
import {useState} from "react";
import { Link } from "react-router-dom";
import { Container } from './styleNav';
import {BsMoon, BsSun,} from 'react-icons/bs';
import Hmenu from "../hamburgerMenu";
import NavBarHamburger from "../navBarHamburger";
import LinksMenu from "../linkMenu";
import {WraperNavMobile} from "./styleNav";



const Nav = () => {
	const [active, setMode] = React.useState(false);
	return <nav>
			
			<Container>
				<a href="/." className="logo"><h5>+55 <span>Bistrô</span></h5></a>
			<div className="navDesktop">
				<LinksMenu />
			</div>
			
			<WraperNavMobile>
				{active&&<NavBarHamburger/>}
			</WraperNavMobile>

			<div className="inc">
				<Hmenu onClick={()=>{setMode(!active)}} />
			</div>
			

			<div className="inc-dark">
				<BsSun />
			</div>

			</Container>

		</nav>;
};

export default Nav;
