import Button from './Button'
import PropTypes from 'prop-types'

const Header = ({ title, onButtonClick, showAdd }) => {
	return (
		<header className='header'>
		  <h1>{title}</h1>
		  <Button
		    text={showAdd ? 'Close' : 'Add'}
		    color={showAdd ? 'red' : 'green'}
		    onClick={onButtonClick} />
		</header>
		);
}

Header.defaultProps = {
	title: 'Task Tracker',
}

Header.propTypes = {
	title: PropTypes.string.isRequired,
}

export default Header;