import Button from './Button'
import PropTypes from 'prop-types'

const Header = ({ title }) => {
	return (
		<header className='header'>
		  <h1>{title}</h1>
		  <Button text='Add' />
		</header>
		);
}

export default Header;

Header.defaultProps = {
	title: 'Task Tracker',
}

Header.propTypes = {
	title: PropTypes.string.isRequired,
}