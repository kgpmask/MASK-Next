import Link from 'next/link';

interface InnerLinkProps {
	isRed?: Boolean;
	isOffWhite?: Boolean;
	href: string;
	children: React.ReactNode;
	target?: string;
	title?: string;
	rel?: string;
}

const InnerLink: React.FC<InnerLinkProps> = ({ isRed, isOffWhite, href, children, target, title, rel }) => {
	return (
		<Link
			href={href}
			style={{ color: (isRed && 'var(--red)') || (isOffWhite && 'var(--off-white)') }}
			target={target || '_self'}
			title={title}
			rel={rel}
		>
			{children}
		</Link>
	);
};

export default InnerLink;
