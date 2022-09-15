import styled from 'styled-components';

export const StyledCardRecipe = styled.div`
	cursor: pointer;
	background-color: #0d0d14;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 400px;
	&:hover {
		h3 {
			color: #ff3a39;
		}
		.overlay {
			top: -2.6% !important;
		}
		i {
			top: 50% !important;
		}
	}
	.img-wrap {
		position: relative;
		overflow: hidden;
		.overlay {
			position: absolute;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.5);
			top: -100%;
			left: 0;
			transition: all 300ms ease-in;
			i {
				position: absolute;
				top: 10%;
				left: 50%;
				transform: translate(-50%, -50%);
				background-color: #fff;
				transition: all 800ms ease-in-out;
				color: #000;
				font-size: 22px;
				padding: 10px 15px 5px 15px;
				border-radius: 50%;
			}
		}
	}
	.text {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 20px;
		padding-top: 0px;
		min-height: 300px;
		h3 {
			font-weight: normal;
			transition: all 300ms ease-in-out;
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
