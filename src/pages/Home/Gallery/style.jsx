import styled from 'styled-components';
import Container from '../../../components/styles/Container';

export const StyledGallery = styled.section`
	.grid {
		width: calc(95% + 20px);
		margin: auto;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 20px;
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
