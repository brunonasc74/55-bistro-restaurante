import Title from '../../../components/Title';
import { StyledRecipe } from './style';
import ElasticCarousel from 'react-elastic-carousel';
import CardRecipe from '../CardRecipe';

const breakPoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 850, itemsToShow: 2, itemsToScroll: 2 },
	{
		width: 1150,
		itemsToShow: 3,
		itemsToScroll: 2,
		pagination: false,
		enableSwipe: false
	}
];

const Recipe = () => {
	return (
		<StyledRecipe>
			<Title preTitle={'Nossas receitas'} mainTitle={'Recomendação do chef'} />
			<div className='container'>
				<ElasticCarousel
					breakPoints={breakPoints}
					showArrows={false}
					itemPadding={[0, 10]}
					easing={'cubic-bezier(0, 0.55, 0.45, 1)'}
				>
					<CardRecipe />
					<CardRecipe />
					<CardRecipe />
				</ElasticCarousel>
			</div>
		</StyledRecipe>
	);
};

export default Recipe;
