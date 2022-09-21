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
		white-space: pre-wrap; /* CSS3 */
		white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
		white-space: -o-pre-wrap; /* Opera 7 */
		word-wrap: break-word; /* Internet Explorer 5.5+ */
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

export const StyledEditItem = styled.form`
	padding: 0 4%;
	border: thin solid #000;
	border-top: thin solid transparent;
	border-bottom: none;
	.flex {
		display: flex;
		gap: 1%;
		* {
			width: 100%;
		}
		.price {
			width: 200px;
		}
	}
	.form-control {
		margin-bottom: 5px;
	}
	.form-control input {
		border: thin solid #000;
		border-radius: 5px;
		width: 100%;
		padding: 5px;
	}
	.btn {
		margin: 10px 0 5px 0;
	}
`;
