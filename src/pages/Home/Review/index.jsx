import Container from '../../../components/styles/Container';
import ElasticCarousel from 'react-elastic-carousel';
import { StyledSection } from './style';
import Title from '../Title';
import CardReview from '../CardReview';

const breakPoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 850, itemsToShow: 2, itemsToScroll: 2 },
	{ width: 1150, itemsToShow: 3, itemsToScroll: 2 }
];

const Review = () => {
	return (
		<StyledSection>
			<Container>
				<Title
					preTitle={'Depoimentos'}
					mainTitle={'O que nossos clientes dizem'}
				/>
			</Container>
			<div className='container'>
				<ElasticCarousel
					breakPoints={breakPoints}
					showArrows={false}
					itemPadding={[0, 10]}
					easing={'cubic-bezier(0, 0.55, 0.45, 1)'}
				>
					<CardReview
						foto={'./public/images/reviews/maguinho.png'}
						nomeCliente={'Magnus'}
						cargo={'Mestre das artes de TI'}
						descricao={`Achei a comida muito poggers, não teve aquela demora que acho omegalul total, 
					a comida veio do jeito que eu pedi, se não eu iria achar meio noggers, a comida tava temperada, 
					já tomei uma micro diff, nota final: restaurante muito based.`}
					/>
					<CardReview />
					<CardReview />
					<CardReview />
					<CardReview />
				</ElasticCarousel>
			</div>
		</StyledSection>
	);
};

export default Review;
