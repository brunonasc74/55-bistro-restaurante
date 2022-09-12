import { StyledCarousel } from './style';

const Carousel = ({ subHeading, heading, subHeading2, background }) => {
	return (
		<StyledCarousel background={background}>
			<p>{subHeading}</p>
			<h1>{heading}</h1>
			<p>{subHeading2}</p>
		</StyledCarousel>
	);
};

export default Carousel;
