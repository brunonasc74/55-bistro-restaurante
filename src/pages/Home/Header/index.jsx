import Container from '../../../components/styles/Container';
import { StyledHeader } from './style';
import Carousel from '../Carousel';
import ElasticCarousel from 'react-elastic-carousel';

const Header = () => {
	return (
		<StyledHeader>
			<ElasticCarousel transitionMs={1500} showArrows={false}>
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
