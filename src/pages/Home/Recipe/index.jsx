import Title from '../Title';
import { StyledRecipe } from './style';
import Container from '../../../components/styles/Container';
import CardRecipe from '../CardRecipe';

const Recipe = () => {
	return (
		<StyledRecipe>
			<Title preTitle={'Nossas receitas'} mainTitle={'Recomendação do chef'} />
			<div className='grid'>
				<CardRecipe />
				<CardRecipe />
				<CardRecipe />
			</div>
		</StyledRecipe>
	);
};

export default Recipe;
