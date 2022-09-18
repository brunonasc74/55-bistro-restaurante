import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import Title from '../../../components/Title';
import { StyledGallery, StyledContainer } from './style';
import data from './data';

const Gallery = () => {
	const [model, setModel] = useState(false);
	const [tempImgSrc, setTempImgSrc] = useState('');

	const getImg = (imgSrc) => {
		setTempImgSrc(imgSrc);
		setModel(true);
	};

	return (
		<StyledGallery>
			<Title
				preTitle={'Nossa Galeria'}
				mainTitle={'Conheça a nossa história'}
			/>
			<StyledContainer>
				<div className={model ? 'model open' : 'model'}>
					<img src={tempImgSrc} />
					<MdClose className='icon' onClick={() => setModel(false)} />
				</div>
				<div className='grid'>
					{data.map((item, index) => {
						return (
							<div
								className='pics'
								key={index}
								onClick={() => getImg(item.imgSrc)}
							>
								<img src={item.imgSrc} />
							</div>
						);
					})}
				</div>
			</StyledContainer>
		</StyledGallery>
	);
};

export default Gallery;
