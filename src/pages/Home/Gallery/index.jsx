import Title from '../../../components/Title';
import CardGallery from '../CardGallery';
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
					<CardGallery image={'./images/gallery/food-galler-img-1.jpg'} />
					<CardGallery image={'./images/gallery/food-galler-img-2.jpg'} />
					<CardGallery image={'./images/gallery/food-galler-img-3.jpg'} />
					<CardGallery image={'./images/gallery/food-galler-img-4.jpg'} />
					<CardGallery image={'./images/gallery/food-galler-img-5.jpg'} />
					<CardGallery image={'./images/gallery/food-galler-img-6.jpg'} />
				</div>
			</StyledContainer>
		</StyledGallery>
	);
};

export default Gallery;
