import Link from 'next/link';

interface InnerLinkProps {
	isRed?: Boolean;
	href: string;
	children: React.ReactNode;
	target?: string;
	title?: string;
	rel?: string;
}

const InnerLink: React.FC<InnerLinkProps> = ({ isRed, href, children, target, title, rel }) => {
	return (
		<Link href={href} style={{ color: isRed ? 'var(--red)' : '' }} target={target || '_self'} title={title} rel={rel}>
			{children}
		</Link>
	);
};

export default InnerLink;
