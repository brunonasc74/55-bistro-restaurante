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

export const StyledEditItem = styled.form`
	.form-control {
		margin: 20px 0;
	}
	.form-control label {
		display: block;
	}
	.form-control input {
		width: 100%;
		height: 40px;
		margin: 5px;
		padding: 3px 7px;
		font-size: 17px;
	}
	.form-control-check {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.form-control-check label {
		flex: 1;
	}
	.form-control-check input {
		flex: 2;
		height: 20px;
	}
`;
