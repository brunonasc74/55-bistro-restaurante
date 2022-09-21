import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	background-color: #0d0d14;
	height: 6.5rem;
	position: static;
	width: 100%;

	a {
		text-decoration: none;
	}

	.logo {
		font-size: 1.6rem;
		color: #ff3a39;
	}

	span {
		color: white;
	}

	ul {
		font-size: 1.4rem;
		list-style: none;
		display: flex;
		gap: 2rem;
		padding: 0;
		a {
			color: white;
		}

		@media (max-width: ${({ theme }) => theme.screen.sm}) {
			display: none;
		}
	}

	ul a:hover {
		color: #ff3a39;
		transition: 0.3s;
	}

	.inc {
		display: flex;
		font-size: 1.7rem;
		@media (min-width: ${({ theme }) => theme.screen.sm}) {
			display: none;
		}
	}

	.inc-dark {
		display: flex;
		font-size: 1.6rem;
	}

	.inc-dark {
		@media (max-width: ${({ theme }) => theme.screen.sm}) {
			display: none;
		}
	}
`;

export const WraperNavMobile = styled.div`
	@media (min-width: ${({ theme }) => theme.screen.sm}) {
		display: none;
	}

	ul {
		@media (max-width: ${({ theme }) => theme.screen.sm}) {
			display: flex;
		}
	}
`;
