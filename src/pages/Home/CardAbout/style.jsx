import styled from 'styled-components';

export const Card = styled.div`
	max-width: 400px;
	min-height: 280px;
	border-radius: 10px;
	padding: 1rem;
	background-color: #0d0d14;
	color: #c5c5c5;
	display: flex;
	flex-direction: column;
	justify-content: center;

	span {
		font-size: 30px;
		font-weight: bold;
		color: #ff3a39;
	}

	h4 {
		font-size: 22px;
		color: #fff;
	}

	.p-cardabout {
		text-align: left;
		font-size: 16px;
		width:90%;
	}

	@media (max-width: ${({ theme }) => theme.screen.lg}) {
		h4 {
			font-size: 22px;
		}
		.p-cardabout {
			font-size: 16px;
		}
	}
`;
