interface TextPageProps {
	title?: string;
	isRed?: boolean;
	children: React.ReactNode;
}

const TextPage: React.FC<TextPageProps> = ({ title, isRed, children }) => {
	return (
		<>
			{title && <h1 style={{ color: isRed ? 'var(--error-red)' : undefined }}>{title}</h1>}
			<div className='text'>{children}</div>
		</>
	);
};

export default TextPage;
