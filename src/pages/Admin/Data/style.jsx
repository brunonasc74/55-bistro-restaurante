import styled from 'styled-components';

export const Card = styled.div`
	border: thin solid #000;
	border-bottom: none;
	font-weight: bold;
	padding: 10px;
	&:last-child {
		border-bottom: thin solid #000;
	}
	span {
		font-weight: normal;
	}
	a {
		color: #0d79f3 !important;
		font-weight: normal;
		&:hover,
		&:visited,
		&:active {
			color: inherit;
			text-decoration: none;
		}
	}
	.btns {
		margin-top: 10px;
		* {
			margin-right: 7px;
			cursor: pointer;
		}
	}
`;
