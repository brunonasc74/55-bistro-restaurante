import React from "react";
import { Container } from "./styleMenu";
import {GiHamburgerMenu} from 'react-icons/gi';


const Hmenu = (props) => {
	return <Container onClick={props.onClick}>

    <GiHamburgerMenu />
      
    </Container>
};

export default Hmenu;
