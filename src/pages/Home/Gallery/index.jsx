import Title from '../../../components/Title';
import { StyledGallery, StyledContainer } from './style';

const Gallery = () => {
	return (
		<StyledGallery>
			<Title
				preTitle={'Nossa Galeria'}
				mainTitle={'Conheça a nossa história'}
			/>
			<StyledContainer>
				<div className='grid'>
					<img src='./images/gallery/food-galler-img-1.jpg' alt='Comida 1' />
					<img src='./images/gallery/food-galler-img-2.jpg' alt='Comida 2' />
					<img src='./images/gallery/food-galler-img-3.jpg' alt='Comida 3' />
					<img src='./images/gallery/food-galler-img-4.jpg' alt='Comida 4' />
					<img src='./images/gallery/food-galler-img-5.jpg' alt='Comida 5' />
					<img src='./images/gallery/food-galler-img-6.jpg' alt='Comida 6' />
				</div>
			</StyledContainer>
		</StyledGallery>
	);
};

export default Gallery;
