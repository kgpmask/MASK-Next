import Link from "next/link";
import { IconType } from "react-icons";

interface SocialHandlesProps {
    title?: string;
    link: string;
    Icon: IconType;
}

const SocialHandles: React.FC<SocialHandlesProps> = ({ link, title, Icon }) => {
    return (
        <Link href={link} target="_blank" title={title} className="social-link">
            <Icon size={36} />
        </Link>
    );
};

export default SocialHandles;
