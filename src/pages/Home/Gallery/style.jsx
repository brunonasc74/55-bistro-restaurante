import styled from 'styled-components';

export const StyledGallery = styled.section`
	.grid {
		width: calc(95% + 20px);
		margin: auto;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 20px;
	}

	@media (max-width: ${({ theme }) => theme.screen.xs}) {
		.grid {
			width: calc(95% + 13px);
			grid-template-columns: repeat(2, 1fr);
			gap: 13px;
		}
	}
`;
