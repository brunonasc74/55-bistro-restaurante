import PropTypes from 'prop-types';
import { StyledButton } from './style';

const Button = ({ color, text, onClick }) => {
	return (
		<StyledButton onClick={onClick} style={{ backgroundColor: color }}>
			{text}
		</StyledButton>
	);
};

Button.defaultProps = {
	color: 'black',
	text: 'text'
};

Button.propTypes = {
	color: PropTypes.string,
	text: PropTypes.string,
	onClick: PropTypes.func
};

export default Button;
