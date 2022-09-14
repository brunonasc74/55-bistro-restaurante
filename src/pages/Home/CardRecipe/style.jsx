import styled from 'styled-components';

export const StyledCardRecipe = styled.div`
	background-color: #0d0d14;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	.text {
		padding: 20px;
		h3 {
			font-weight: normal;
		}
		p {
			color: #c5c5c5;
			font-size: 1rem;
		}
		.flex {
			display: flex;
			align-items: center;
			p {
				margin-left: 10px;
				span {
					color: #fff;
					font-weight: bold;
				}
			}
		}
	}

	@media (max-width: ${({ theme }) => theme.screen.lg}) {
		grid-template-columns: repeat(1, 1fr) !important;
	}
`;
