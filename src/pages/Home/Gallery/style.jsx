import styled from 'styled-components';
import Container from '../../../components/styles/Container';

export const StyledGallery = styled.section`
	
	.btn-gallery {
		display: flex;
		justify-content: center;
		margin-top: 2rem;
	}

	a {
		text-decoration: none;
	}
	.model {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: rgba(0, 0, 0, 0.719);
		transition: visibility 0.3s ease, transform 0.3s ease-in-out;
		visibility: hidden;
		opacity: 0;
		transform: scale(0);
		z-index: 1;
		overflow: hidden;
		img {
			margin-top: 20px;
		}
	}
	.open {
		user-select: none;
		visibility: visible;
		opacity: 1;
		transform: scale(1);
		.icon-close {
			position: fixed;
			top: 20px;
			right: 20px;
			width: 2.2rem;
			height: 2.2rem;
			cursor: pointer;
			&:hover {
				color: #ec4646;
			}
			&:active {
				color: transparent;
			}
		}
		.arrows {
			margin-top: 20px;
			display: flex;
			justify-content: space-between;
			width: 200px;
			color: #cfcfcf;
			.arrow {
				width: 50px;
				height: 50px;
				cursor: pointer;
				&:hover {
					color: #ffffff;
				}
			}
		}
	}
	.grid {
		width: calc(95% + 20px);
		margin: auto;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 20px;
	}
	.pics {
		cursor: pointer;
		transition: all 350ms ease;
		&:hover {
			filter: brightness(0.7);
		}
	}

	@media (max-width: ${({ theme }) => theme.screen.lg}) {
		.grid {
			width: calc(95% + 13px);
			grid-template-columns: repeat(2, 1fr);
			gap: 13px;
		}
	}
	@media (max-width: ${({ theme }) => theme.screen.sm}) {
		.model img {
			margin-top: 50px;
		}
		.open .arrows {
			margin-top: 50px;
		}
	}
`;

export const StyledContainer = styled(Container)`
	width: 1300px;

	@media (max-width: ${({ theme }) => theme.screen.lg}) {
		width: 700px;
	}
`;
