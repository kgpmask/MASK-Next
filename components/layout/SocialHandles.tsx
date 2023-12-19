import Link from "next/link";
import { useState } from "react";
import { IconType } from "react-icons";

interface SocialHandlesProps {
	title?: string;
	link: string;
	Icon: IconType;
}

const SocialHandles: React.FC<SocialHandlesProps> = ({ link, title, Icon }) => {
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseOver = (): void => {
		setIsHovered(true);
	};

	const handleMouseOut = (): void => {
		setIsHovered(false);
	};

	return (
		<Link href={link} target="_blank" title={title} className="social-link">
			<div
				onMouseOver={handleMouseOver}
				onMouseOut={handleMouseOut}
				style={{
					color: isHovered ? "#610000" : "#7a0101",
					transition: "color 0.3s ease-in-out",
				}}
			>
				<Icon size={36} />
			</div>
		</Link>
	);
};

export default SocialHandles;
