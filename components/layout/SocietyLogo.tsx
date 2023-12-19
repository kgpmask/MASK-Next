import Link from "next/link";
import Image from "next/image";

const SocialHandles: React.FC = () => {
    return (
        <Link id="footer-logo" href="/">
            <Image src="/logo.jpeg" alt="MASK" width={50} height={50} />
        </Link>
    );
};

export default SocialHandles;
