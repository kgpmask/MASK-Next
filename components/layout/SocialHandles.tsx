import Link from 'next/link';
import { IconType } from 'react-icons';

interface SocialHandlesProps {
	title?: string;
	link: string;
	Icon: IconType;
}

const SocialHandles: React.FC<SocialHandlesProps> = ({ title, link, Icon }) => {
	return (
		<Link href={link} target="_blank" title={title} className="social-link">
			<div className="icon">
				<Icon size={42} />
			</div>
		</Link>
	);
};

export default SocialHandles;
