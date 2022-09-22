import styled from 'styled-components';

export const StyledBoxForm = styled.div`
	.rightContainer {
		grid-row: 2/3;
		grid-column: 2/3;
		background-size: cover;
		background-repeat: no-repeat;
		position: relative;
		@media screen and (max-width: 700px) {
			background: none;
		}

		.formContainer {
			position: absolute;
			bottom: 4.5rem;
			left: 45.5%;
			@media screen and (max-width: 700px) {
				position: relative;
				bottom: unset;
				left: unset;
			}

			form {
				width: 100%;
				display: flex;
				flex-direction: column;

				.imgContainer {
					line-height: 0;
					img {
						max-width: 950px;
						width: max(53vw, 360px);
						height: 220px;
						object-fit: cover;
						@media screen and (max-width: 700px) {
							width: 100%;
							height: 250px;
						}
					}
				}
				.formInner {
					background: #080b10;
					padding: 1.4rem;
					@media screen and (max-width: 700px) {
						width: 100%;
					}

					input {
						margin-bottom: 1rem;
						padding: 0.4rem 0.6rem;
						border: 0;
						border-radius: 5px;
						background: #111419;
						outline: 1px solid #ff3a39;
						color: #a9a7a5;
						font-size: 1rem;
						color-scheme: dark;
					}
					

					.dateTime input {
						margin-right: 4px;
						height: 31px;
					}

					button {
						padding: 1rem 2rem;
						font-size: 1rem;
						border: 0;
						border-radius: 5px;
						color: #ffffff;
						display: flex;
						align-items: center;
						gap: 0.8rem;
						font-weight: 600;
						background: #ff3a39;
						cursor: pointer;
						transition: all ease-in-out 250ms;
						&:hover {
							overflow: hidden;
							-webkit-transform: scale(1.1);
							transform: scale(1.1);
							span {
								color: #ffffff;
							}
						}
					}
				}
			}
		}
	}
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;

  .InputBox {
	width: 100%;
    display: flex;
    gap: 4px;
  }

  .InputBox div {
	width: 49%;
  }

  .InputBox div input {
	width: 100%;
  }
`;