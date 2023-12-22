interface TextPageProps {
	title?: string;
	children: React.ReactNode;
}

const TextPage: React.FC<TextPageProps> = ({ title, children }) => {
	return (
		<>
			{title && <h1>{title}</h1>}
			<div className='text'>{children}</div>
		</>
	);
};

export default TextPage;
