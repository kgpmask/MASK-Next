interface TextPageProps {
	title?: string;
	center?: Boolean;
	children: React.ReactNode;
}

const TextPage: React.FC<TextPageProps> = ({ title, center, children }) => {
	return (
		<>
			{title && <h1 style={{ textAlign: center ? 'center' : 'left' }}>{title}</h1>}
			<div className='text'>{children}</div>
		</>
	);
};

export default TextPage;
