import Title from '../Title';
import { StyledRecipe } from './style';
import ElasticCarousel from 'react-elastic-carousel';
import CardRecipe from '../CardRecipe';

const Recipe = () => {
	return (
		<StyledRecipe>
			<Title preTitle={'Nossas receitas'} mainTitle={'Recomendação do chef'} />
			<ElasticCarousel>
				<CardRecipe />
				<CardRecipe />
				<CardRecipe />
			</ElasticCarousel>
		</StyledRecipe>
	);
};

export default Recipe;
