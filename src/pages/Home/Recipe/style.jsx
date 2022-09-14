import styled from 'styled-components';

export const StyledRecipe = styled.section`
	.grid {
		width: 1600px;
		max-width: 95%;
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 20px;
	}

	@media (max-width: ${({ theme }) => theme.screen.sm}) {
		grid-template-columns: repeat(1, 1fr) !important;
	}
`;
