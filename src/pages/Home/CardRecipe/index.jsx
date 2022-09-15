import { FaClock } from 'react-icons/fa';
import { StyledCardRecipe } from './style';

const CardRecipe = ({ imagem, titulo, descricao, tempo }) => {
	return (
		<StyledCardRecipe>
			<img src={imagem} alt='Receita' />
			<div className='text'>
				<h3>{titulo}</h3>
				<p>{descricao}</p>
				<div className='flex'>
					<FaClock />
					<p>
						Tempo: <span>{tempo}</span>
					</p>
				</div>
			</div>
		</StyledCardRecipe>
	);
};

CardRecipe.defaultProps = {
	imagem: './public/images/recipes/1.jpg',
	titulo: 'Comida',
	descricao: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nihil
	omnis cumque placeat repellat ipsa, itaque quasi reiciendis laborum
	hic assumenda quidem reprehenderit ut nam vel enim incidunt sequi
	error.`,
	tempo: '15min'
};

export default CardRecipe;
