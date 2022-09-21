import styled from 'styled-components';

export const StyledCardEvent = styled.div`
	background-color: #0d0d14;
	color: #c5c5c5;
	border-radius: 3px;
	width: 700px;
	padding: 25px;
	position: relative;
	h1 {
		color: #fff;
		margin: 0;
	}

	a {
		text-decoration: none
	}
	div {
		display: flex;
		align-items: center;
		.icon {
			color: #b43131;
			margin: 0 4px 0 7px;
			&:nth-child(1) {
				margin-left: 0;
			}
		}
	}
	.mark {
		position: absolute;
		border-bottom: 35px solid #b43131;
		border-left: 35px solid transparent;
		bottom: 25px;
		right: 25px;
	}

	@media (max-width: 1506px) {
		width: 500px;
		font-size: 1rem;
	}
	@media (max-width: 550px) {
		padding: 15px;
		width: 95%;
		font-size: 0.9rem;
		.mark {
			border-bottom: 25px solid #b43131;
			border-left: 25px solid transparent;
			bottom: 15px;
			right: 15px;
		}
	}
	@media (max-width: 403px) {
		div {
			flex-direction: column;
			align-items: flex-start;
			.icon {
				margin: 0;
				margin-top: 3px;
				&:nth-child(1) {
					margin-top: 10px;
				}
			}
		}
	}
`;
