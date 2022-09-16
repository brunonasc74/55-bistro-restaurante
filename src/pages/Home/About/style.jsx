import styled from "styled-components";

export const Container = styled.section`
display: flex;
flex-direction: column;
align-items: center;

.p-about {
  width: 40rem;
  text-align: center;
  margin-bottom: 3rem;
}

@media (max-width: ${({ theme }) => theme.screen.sm}) {
  .p-about {
    width: 30rem;
  }

  @media (max-width: ${({ theme }) => theme.screen.xs}) {
    .p-about {
    width: 25rem;
    font-size: 16px;
    padding: 1rem;
  }
  }
}
`

export const Title = styled.div`
	margin-top: 4rem;
	margin-bottom: 1rem;
	text-align: center;
	h3 {
		font-family: 'Dancing Script', cursive;
		color: #ff3a39;
		font-size: 2rem;
		line-height: 0.1rem;
	}
	h1 {
		font-weight: normal;
		font-size: 2rem;
	}
	.wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		margin: 1rem;
		&::after,
		&::before {
			content: '';
			display: inline-block;
			margin: 0 0.5rem;
			width: 7rem;
			height: 2px;
			background-color: #ff3a39;
		}
		.square {
			background-color: #ff3a39;
			transform: rotate(45deg);
			margin: 0 0.25rem;
			&:nth-child(1) {
				width: 6px;
				height: 6px;
			}
			&:nth-child(2) {
				width: 10px;
				height: 10px;
			}
			&:nth-child(3) {
				width: 6px;
				height: 6px;
			}
		}
	}

	@media (max-width: ${({ theme }) => theme.screen.sm}) {
		.wrapper {
			&::after,
			&::before {
				width: 4rem;
			}
		}
	}
`;