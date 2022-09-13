import { StyledTitle } from './style';

const Title = ({ preTitle, mainTitle }) => {
	return (
		<StyledTitle>
			<h3>{preTitle}</h3>
			<h1>{mainTitle}</h1>
			<div className='wrapper'>
				<div className='square'></div>
				<div className='square'></div>
				<div className='square'></div>
			</div>
		</StyledTitle>
	);
};

export default Title;
