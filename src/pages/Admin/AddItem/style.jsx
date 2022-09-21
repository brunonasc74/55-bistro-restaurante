import styled from 'styled-components';

export const StyledAddItem = styled.form`
	padding: 0 5%;
	padding-top: 5%;
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
		margin: 15px 0 10px 0;
	}
`;
