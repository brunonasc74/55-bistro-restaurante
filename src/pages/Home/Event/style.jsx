import styled from 'styled-components';

export const StyledEvent = styled.section`
	background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
		url('./public/images/event-img.jpg');
	background-position: center;
	background-size: cover;
	background-attachment: fixed;
	margin-top: 100px;
	padding: 25px 0;
	.container {
		width: 95%;
		margin: auto;
	}
	.flex {
		gap: 25px;
		margin-bottom: 75px;
		display: flex;
		justify-content: center;
	}
	@media (max-width: 1506px) {
		.flex {
			gap: 10px;
		}
	}
	@media (max-width: 890px) {
		.flex {
			flex-direction: column;
			align-items: center;
		}
	}
`;

export const Title = styled.div`
	margin-top: 100px;
	margin-bottom: 75px;
	text-align: center;
	h1 {
		font-family: 'Dancing Script', cursive;
		color: #fff;
		font-size: 4rem;
		line-height: 0.1rem;
		font-weight: normal;
		margin-bottom: 5.5rem;
	}
	.wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		margin: 1rem;
		&::after,
		&::before {
			content: '';
			display: inline-block;
			margin: 0 0.5rem;
			width: 7rem;
			height: 2px;
			background-color: #fff;
		}
		.square {
			background-color: #fff;
			transform: rotate(45deg);
			margin: 0 0.25rem;
			&:nth-child(1) {
				width: 6px;
				height: 6px;
			}
			&:nth-child(2) {
				width: 10px;
				height: 10px;
			}
			&:nth-child(3) {
				width: 6px;
				height: 6px;
			}
		}
	}

	@media (max-width: ${({ theme }) => theme.screen.sm}) {
		h1 {
			font-size: 3.3rem;
			margin-bottom: 4rem;
		}
		.wrapper {
			&::after,
			&::before {
				width: 4rem;
			}
		}
	}
`;
