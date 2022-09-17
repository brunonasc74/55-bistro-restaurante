import Container from '../../../components/styles/Container';
import Title from '../../../components/Title';
import { StyledGallery } from './style';

const Gallery = () => {
	return (
		<StyledGallery>
			<Title
				preTitle={'Nossa Galeria'}
				mainTitle={'Conheça a nossa história'}
			/>
			<Container>
				<div className='grid'>
					<img src='./images/gallery/food-galler-img-1.jpg' alt='' />
					<img src='./images/gallery/food-galler-img-2.jpg' alt='' />
					<img src='./images/gallery/food-galler-img-3.jpg' alt='' />
					<img src='./images/gallery/food-galler-img-4.jpg' alt='' />
					<img src='./images/gallery/food-galler-img-5.jpg' alt='' />
					<img src='./images/gallery/food-galler-img-6.jpg' alt='' />
				</div>
			</Container>
		</StyledGallery>
	);
};

export default Gallery;
