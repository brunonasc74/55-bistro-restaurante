import { BiSearch } from 'react-icons/bi';
import { StyledCardGallery } from './style';

const CardGallery = ({ image }) => {
	return (
		<StyledCardGallery>
			<a href={image}>
				<img src={image} alt='Comida' />
				<div className='overlay'>
					<BiSearch className='icon' />
				</div>
			</a>
		</StyledCardGallery>
	);
};

export default CardGallery;
