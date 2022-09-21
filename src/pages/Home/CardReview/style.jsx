import styled from 'styled-components';

export const StyledCardReview = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	max-width: 500px;
	min-height: 500px;
	background-color: #0d0d14;
	border-radius: 10px;
	padding: 40px;
	cursor: pointer;
	.flex {
		display: flex;
		justify-content: start;
		align-items: center;
		img {
			width: 6rem;
			height: 6rem;
			margin: 0 20px 10px 0;
			border-radius: 50%;
		}
		.title-flex {
			display: flex;
			flex-direction: column;
			h3 {
				margin-bottom: -1.8rem;
			}
			h4 {
				color: #c5c5c5;
				font-weight: normal;
			}
		}
	}
	p {
		color: #c5c5c5;
	}
	.rating {
		color: #ffd000;
		* {
			margin-right: 5px;
		}
	}

	@media (max-width: ${({ theme }) => theme.screen.sm}) {
		padding: 15px;
		p {
			font-size: 1rem;
		}
	}
	@media (max-width: 388px) {
		.flex {
			flex-direction: column;
		}
		.title-flex {
			text-align: center;
		}
	}
`;
