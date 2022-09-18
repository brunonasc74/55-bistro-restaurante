import styled from 'styled-components';
import Container from '../../../components/styles/Container';

export const StyledGallery = styled.section`
	.model {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #000;
		transition: visibility 0.3s ease, transform 0.3s ease-in-out;
		visibility: hidden;
		opacity: 0;
		transform: scale(0);
		z-index: 1;
		overflow: hidden;
	}
	.open {
		visibility: visible;
		opacity: 1;
		transform: scale(1);
		.icon {
			position: fixed;
			top: 20px;
			right: 20px;
			width: 2.2rem;
			height: 2.2rem;
			cursor: pointer;
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
			filter: opacity(0.5);
		}
	}

	@media (max-width: ${({ theme }) => theme.screen.lg}) {
		.grid {
			width: calc(95% + 13px);
			grid-template-columns: repeat(2, 1fr);
			gap: 13px;
		}
	}
`;
export const StyledContainer = styled(Container)`
	width: 1300px;

	@media (max-width: ${({ theme }) => theme.screen.lg}) {
		width: 700px;
	}
`;
