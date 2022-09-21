import { StyledPreFooter } from './style';
import { Link } from 'react-router-dom';

const PreFooter = () => {
	return (
		<StyledPreFooter>
			<div>
				<h1>Nós Fazemos Comidas Nutritivas&nbsp;e&nbsp;Deliciosas</h1>
				<Link to='/reserva'>
					<button>Reserve uma mesa agora</button>
				</Link>
			</div>
		</StyledPreFooter>
	);
};

export default PreFooter;
