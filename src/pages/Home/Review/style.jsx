import styled from 'styled-components';

export const StyledSection = styled.section`
	.container {
		width: 1600px;
		max-width: 95%;
		margin: 0 auto;
	}
	.rec-slider-container {
		margin: 0;
	}
	.rec-dot {
		background-color: transparent;
		border: thin solid #ff393999;
		&:hover {
			box-shadow: 0 0 1px 1px rgba(255, 57, 57, 0.801);
		}
		&:focus {
			box-shadow: 0 0 1px 1px rgba(255, 57, 57);
		}
	}
	.rec-dot_active {
		box-shadow: 0 0 1px 1px rgba(255, 57, 57);
		background-color: #d41a1a99;
	}
`;
