import Container from '../../../components/styles/Container';
import { StyledSection } from './style';
import Title from '../Title';
import CardReview from '../CardReview';

const Review = () => {
	return (
		<StyledSection>
			<Container>
				<Title preTitle={'Depoimentos'} mainTitle={'O que os clientes dizem'} />
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
			</Container>
		</StyledSection>
	);
};

export default Review;
