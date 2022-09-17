import styled from 'styled-components';

export const StyledCardGallery = styled.div`
	a {
		position: relative;
		overflow: hidden;
		img {
			transition: all 700ms ease-in-out;
		}
		.overlay {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			opacity: 1;
			background-color: rgba(0, 0, 0, 0.45);
			display: flex;
			justify-content: center;
			align-items: baseline;
			transition: all 500ms ease-in-out;
		}
	}
`;
