import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../Footer/styleFooter';
import {
	BsInstagram,
	BsFacebook,
	BsTwitter,
	BsTelephone
} from 'react-icons/bs';
import { MdMailOutline } from 'react-icons/md';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';

const Footer = () => {
	return (
		<ThemeProvider theme={theme}>
			<footer>
				<Container>
					<div className='footer-top'>
						<div className='flex-col coluna1'>
							<h4 className='logo-name'>
								+55 <span>Bistrô</span>
							</h4>
							<p className='descricao'>
								Trazendo o melhor da comida brasileira para o seu prato.
							</p>
							<ul className='social'>
								<li>
									<a href=''>
										<BsFacebook />
									</a>
								</li>
								<li>
									<a href=''>
										<BsInstagram />
									</a>
								</li>
								<li>
									<a href=''>
										<BsTwitter />
									</a>
								</li>
							</ul>
						</div>
						<div className='flex-col coluna2'>
							<h4 className='titulo'>ENDEREÇO</h4>
							<p className='descricao'>Rua Bárbara Heliodora, 59</p>
							<p className='descricao'>Belo Horizonte - MG</p>

							<p className='descricao'>
								<BsTelephone /> +55 (38)4002-8922
							</p>
							<p className='descricao'>
								<MdMailOutline /> 55bistro@bistro.com.br
							</p>
						</div>

						<div className='flex-col coluna3'>
							<h4 className='titulo'>Horario de Atendimento</h4>
							<ul className='timings flex-col'>
								<li>
									<p className='days'>Segunda</p>
									<div className='time'>10:00 - 23:00</div>
								</li>
								<li>
									<p className='days'>Terça</p>
									<div className='time'>10:00 - 23:00</div>
								</li>
								<li>
									<p className='days'>Quarta</p>
									<div className='time'>10:00 - 23:00</div>
								</li>
								<li>
									<p className='days'>Quinta</p>
									<div className='time'>10:00 - 23:00</div>
								</li>
								<li>
									<p className='days'>Sexta</p>
									<div className='time'>10:00 - 23:00</div>
								</li>
								<li>
									<p className='days'>Sabado</p>
									<div className='time'>10:00 - 23:00</div>
								</li>
								<li>
									<p className='days'>Domingo</p>
									<div className='time'>10:00 - 23:00</div>
								</li>
							</ul>
						</div>
						<div className='flex-col coluna4'>
							<h4 className='titulo'>Mais Informações</h4>
							<a href=''>Início</a>
							<a href='/reserva'>Reservas</a>
							<a href='/cardapio/menu'>Cardápio</a>
							<a href='/contato'>Equipe</a>
						</div>
					</div>

					<div className='footer-bottom flex-row'>
						<span>Copyright &copy; 2022 | Squad 1</span>
					</div>
				</Container>
			</footer>
		</ThemeProvider>
	);
};

export default Footer;
