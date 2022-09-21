import React, { useState } from 'react';
import { MdClose, MdArrowBack, MdArrowForward } from 'react-icons/md';
import Title from '../../../components/Title';
import { StyledGallery, StyledContainer } from './style';
import data from './data';
import Button from '../../Cardapio/Button/style';

const Gallery = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [openedImg, setOpenedImg] = useState('');
	const [imgIndex, setImgIndex] = useState();

	const getImg = (imgSrc, index) => {
		setOpenedImg(imgSrc);
		setImgIndex(index);
		setIsOpen(true);
	};
	const rightArw = () => {
		if (imgIndex + 1 === data.length) {
			setOpenedImg(data[0].imgSrc);
			setImgIndex(0);
		} else {
			setOpenedImg(data[imgIndex + 1].imgSrc);
			setImgIndex(imgIndex + 1);
		}
	};
	const leftArw = () => {
		if (imgIndex === 0) {
			setOpenedImg(data[data.length - 1].imgSrc);
			setImgIndex(data.length - 1);
		} else {
			setOpenedImg(data[imgIndex - 1].imgSrc);
			setImgIndex(imgIndex - 1);
		}
	};

	return (
		<StyledGallery>
			<Title
				preTitle={'Nossa Galeria'}
				mainTitle={'Conheça a nossa história'}
			/>
			<StyledContainer>
				<div className={isOpen ? 'model open' : 'model'}>
					<MdClose className='icon-close' onClick={() => setIsOpen(false)} />
					<img src={openedImg} />
					<div className='arrows'>
						<MdArrowBack className='arrow' onClick={() => leftArw()} />
						<MdArrowForward className='arrow' onClick={() => rightArw()} />
					</div>
				</div>
				<div className='grid'>
					{data.map((item, index) => {
						return (
							<div
								className='pics'
								key={index}
								onClick={() => getImg(item.imgSrc, index)}
							>
								<img src={item.imgSrc} />
							</div>
						);
					})}
				</div>
			</StyledContainer>
			<a className="btn-gallery" href="/cardapio/menu"><Button>Cardápio</Button></a>
		</StyledGallery>
	);
};

export default Gallery;
