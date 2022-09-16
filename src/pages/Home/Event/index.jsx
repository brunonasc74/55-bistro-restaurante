import { StyledEvent, Title } from './style';
import CardEvent from '../CardEvent';

const Event = () => {
	return (
		<StyledEvent>
			<div className='container'>
				<Title>
					<h1>Eventos</h1>
					<div className='wrapper'>
						<div className='square'></div>
						<div className='square'></div>
						<div className='square'></div>
					</div>
				</Title>
				<div className='flex'>
					<CardEvent />
					<CardEvent />
				</div>
			</div>
		</StyledEvent>
	);
};

export default Event;
