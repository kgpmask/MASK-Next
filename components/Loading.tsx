import React from 'react';

const Loading: React.FC = () => {
	const containerStyle: React.CSSProperties = {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	};
	return (
		<div style={containerStyle}>
			<h1>Loading...&lt; &gt;_&lt; &gt;</h1>
		</div>
	);
};

export default Loading;
