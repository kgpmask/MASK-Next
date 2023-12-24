interface EmphasisProps {
	isRed?: Boolean;
	isOffWhite?: Boolean;
	big?: Boolean;
	marginal?: Boolean;
	center?: Boolean;
	children: React.ReactNode;
}

const Emphasis: React.FC<EmphasisProps> = ({ isRed, isOffWhite, children, big, marginal, center }) => {
	return (
		<>
			<p
				style={{
					color: (isRed && 'var(--red)') || (isOffWhite && 'var(--off-white)'),
					textAlign: center && 'center',
					fontSize: big && '118%',
					fontStyle: 'italic',
					margin: marginal && '10px'
				}}
			>
				{children}
			</p>
			<br />
		</>
	);
};

export default Emphasis;
