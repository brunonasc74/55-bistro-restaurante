import styled from 'styled-components';

export const StyledCardRecipe = styled.div`
	background-color: #0d0d14;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 400px;

	.text {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 20px;
		min-height: 300px;
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
			bottom: 0;
			p {
				margin-left: 10px;
				span {
					color: #fff;
					font-weight: bold;
				}
			}
		}
	}
`;
