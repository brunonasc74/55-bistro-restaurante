import styled from 'styled-components';

export const StyledTitle = styled.div`
	margin-top: 100px;
	margin-bottom: 75px;
	text-align: center;
	h3 {
		font-family: 'Dancing Script', cursive;
		color: #ff3a39;
		font-size: 2rem;
		line-height: 0.1rem;
	}
	h1 {
		font-weight: normal;
		font-size: 2rem;
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
			background-color: #ff3a39;
		}
		.square {
			background-color: #ff3a39;
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
		.wrapper {
			&::after,
			&::before {
				width: 4rem;
			}
		}
	}
	@media (max-width: ${({ theme }) => theme.screen.xs}) {
		width: 90%;
		margin: 75px auto 50px auto;
		h3 {
			font-size: 1.5rem;
		}
		h1 {
			font-size: 1.5rem;
		}
	}
`;
