interface TextPageProps {
	title?: string;
	isRed?: Boolean;
	children: React.ReactNode;
}

const TextPage: React.FC<TextPageProps> = ( { title, isRed, children } ) => {
	return (
		<>
			{title && <h1 style={{ color: isRed ? 'var(--error-red)' : '' }}>{title}</h1>}
			<div className='text'>{children}</div>
		</>
	);
};

export default TextPage;
