import styled from 'styled-components';

export const StyledCarousel = styled.div`
	background: ${({ background }) => `url(./images/${background})`};
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	margin-left: -1px;
	min-height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	p:nth-of-type(1) {
		font-weight: 900;
		letter-spacing: 5px;
		display: inline-block;
		margin-bottom: 10px;
		border: thin solid rgba(255, 255, 255, 0.5);
		padding: 0 10px;
		position: relative;
		line-height: 2;
		z-index: 0;
		text-shadow: 0px 2px 2px #000;
	}

	h1 {
		font-family: 'Dancing Script', cursive;
		line-height: 1;
		font-size: 7vw;
		font-weight: normal;
		margin-bottom: 40px;
	}

	p:nth-of-type(2) {
		color: #ff3a39;
		font-size: 18px;
		font-weight: 700;
		display: inline-block;
		position: relative;
		z-index: 0;
		letter-spacing: 5px;
		text-shadow: 0 2px 2px #000;

		&::after,
		&::before {
			content: '';
			display: inline-block;
			margin: 0 2rem;
			width: 70px;
			transform: translateY(-5px);
			height: 2px;
			background-color: #ff3a39;
		}
	}

	@media (max-width: ${({ theme }) => theme.screen.lg}) {
		h1 {
			font-size: 12vw;
		}
	}
	@media (max-width: ${({ theme }) => theme.screen.sm}) {
		h1 {
			font-size: 15vw;
		}
		p:nth-of-type(2) {
			&::after,
			&::before {
				margin: 0 1rem;
				width: 60px;
			}
		}
	}
`;
