import { StyledCardReview } from './style';
import { FaStar } from 'react-icons/fa';

const CardReview = ({ foto, nomeCliente, cargo, descricao }) => {
	return (
		<StyledCardReview>
			<div className='flex'>
				<img src={foto} alt='Cliente' />
				<div className='title-flex'>
					<h3>{nomeCliente}</h3>
					<h4>{cargo}</h4>
				</div>
			</div>
			<p>{descricao}</p>
			<div className='rating'>
				<FaStar />
				<FaStar />
				<FaStar />
				<FaStar />
				<FaStar />
			</div>
		</StyledCardReview>
	);
};

CardReview.defaultProps = {
	foto: './public/images/reviews/1.jpg',
	nomeCliente: 'Nome do Cliente',
	cargo: 'Cargo',
	descricao:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, iure? Rem animi ab eveniet vitae dicta aliquam quae atque alias.'
};

export default CardReview;
