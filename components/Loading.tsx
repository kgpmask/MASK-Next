import React, { useEffect, useState } from 'react';

const Loading: React.FC = () => {
	const [dots, setDots] = useState(1);
	const [showBadNetMessage, setShowBadNetMessage] = useState(false);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setDots((prevDots) => prevDots < 3 ? prevDots + 1 : 1);
		}, 500);

		const timeoutId = setTimeout(() => {
			setShowBadNetMessage(true);
		}, 20000);

		return () => {
			clearInterval(intervalId);
			clearTimeout(timeoutId);
		};
	}, []);

	const containerStyle: React.CSSProperties = {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	};

	return (
		<>
			<div style={containerStyle}>
				<h1>
					{' '}
					Loading{'.'.repeat(dots)}(*^‿^*)<br></br>
					{showBadNetMessage && <i style={{ fontSize: '50%', color: 'var(--off-white)' }}>
						Taking too much time? Check your internet connection.
					</i>}
				</h1>
			</div>
		</>
	);
};

export default Loading;
