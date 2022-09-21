import React from 'react';
import { useState } from 'react';
import { Container } from './styleNav';
import { BsMoon, BsSun } from 'react-icons/bs';
import Hmenu from '../hamburgerMenu';
import NavBarHamburger from '../navBarHamburger';
import LinksMenu from '../linkMenu';
import { WraperNavMobile } from './styleNav';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';

const Nav = () => {
	const [active, setMode] = useState(false);
	return (
		<ThemeProvider theme={theme}>
			<>
				<nav>
					<Container>
						<a href='/.' className='logo'>
							<h5>
								+55 <span>Bistrô</span>
							</h5>
						</a>
						<div className='navDesktop'>
							<LinksMenu />
						</div>

						<WraperNavMobile>{active && <NavBarHamburger />}</WraperNavMobile>

						<div className='inc'>
							<Hmenu
								onClick={() => {
									setMode(!active);
								}}
							/>
						</div>

						<div className='inc-dark'>
							<BsSun />
						</div>
					</Container>
				</nav>
			</>
		</ThemeProvider>
	);
};

export default Nav;
