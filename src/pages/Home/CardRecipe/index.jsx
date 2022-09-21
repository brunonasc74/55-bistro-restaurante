import { FiClock, FiLink } from 'react-icons/fi';
import { StyledCardRecipe } from './style';

const CardRecipe = ({ imagem, titulo, descricao, tempo }) => {
	return (
		<StyledCardRecipe>
			<div className='img-wrap'>
				<img src={imagem} alt='Receita' />
				<div className='overlay'>
					<i>
						<FiLink />
					</i>
				</div>
			</div>
			<div className='text'>
				<h3>{titulo}</h3>
				<p>{descricao}</p>
				<div className='flex'>
					<FiClock className='icon' />
					<p>
						Tempo: <span>{tempo}</span>
					</p>
				</div>
			</div>
		</StyledCardRecipe>
	);
};

CardRecipe.defaultProps = {
	imagem: './images/recipes/1.jpg',
	titulo: 'Comida',
	descricao: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nihil
	omnis cumque placeat repellat ipsa, itaque quasi reiciendis laborum
	hic assumenda quidem reprehenderit ut nam vel enim incidunt sequi
	error.`,
	tempo: '15min'
};

export default CardRecipe;
