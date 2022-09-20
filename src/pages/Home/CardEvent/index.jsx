import { BiCalendar, BiTimeFive, BiLocationPlus } from 'react-icons/bi';
import { StyledCardEvent } from './style';
import Button from '../../Cardapio/Button/style';

const CardEvent = ({ title, date, time, location, desc }) => {
	return (
		<StyledCardEvent href='#'>
			<h1>{title}</h1>
			<div>
				<BiCalendar className='icon' />
				{date}
				<BiTimeFive className='icon' />
				{time}
				<BiLocationPlus className='icon' />
				{location}
			</div>
			<p>{desc}</p>
			<Button> Reserve já! </Button>
			<div className='mark'></div>
		</StyledCardEvent>
	);
};

CardEvent.defaultProps = {
	title: 'Título evento',
	date: '01-01-2023',
	time: '19:00',
	location: 'Cidade, Estado, País',
	desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
    mollitia temporibus iste! Voluptate ullam eveniet voluptas illum fugit
    fugiat reiciendis placeat rerum, id necessitatibus, mollitia impedit,
    molestias neque aliquam temporibus?`
};

export default CardEvent;
