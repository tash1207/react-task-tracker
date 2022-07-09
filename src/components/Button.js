const Button = ({ text }) => {
	const onClick = () => {
		console.log('click');
	};
	
	return (
		<button className='btn' onClick={onClick}>
		  {text}
		</button>
		);
}

export default Button
