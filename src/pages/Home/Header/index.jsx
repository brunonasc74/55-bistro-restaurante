import React, { useRef } from 'react';
import { StyledHeader } from './style';
import Carousel from '../Carousel';
import ElasticCarousel from 'react-elastic-carousel';

const Header = () => {
	return (
		<StyledHeader>
			<ElasticCarousel
				transitionMs={3000}
				showArrows={false}
				pagination={false}
				enableSwipe={false}
				enableAutoPlay={true}
				autoPlaySpeed={3000}
			>
				<Carousel
					subHeading={'+55 Bistrô'}
					heading={'Pizza de melhor'}
					subHeading2={'QUALIDADE'}
					background={'home-slide-1.jpg'}
				/>
				<Carousel
					subHeading={'+55 Bistrô'}
					heading={'Cozinhando Desde'}
					subHeading2={'1999'}
					background={'home-slide-2.jpg'}
				/>
			</ElasticCarousel>
		</StyledHeader>
	);
};

export default Header;
