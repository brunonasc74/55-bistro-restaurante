import styled from 'styled-components';

export const StyledHeader = styled.header`
	.link {
		text-decoration: none;
		color: inherit;
		h1 {
			position: relative;
			cursor: pointer;
			font-weight: normal;
			margin: 0;
			margin-bottom: 25px;
			span {
				color: #ff3a39;
			}
		}
		p {
			position: absolute;
			top: 25px;
			padding-left: 20px;
		}
		&:hover {
			h1 {
				color: #ff3a39;
				span {
					color: #000;
				}
			}
			p {
				text-decoration: underline;
			}
		}
	}
`;
