import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";

const HamburgerButton: React.FC = () => {
	const [visible, setVisible] = React.useState(false);

	const onClick = () => {
		setVisible(!visible);
		document.querySelector(".hamburger-menu")?.classList.toggle("slide");
	};

	return (
		<div className="plate">
			<Link href="/">
				<div className="burger-home">
					<Image src="/logo.jpeg" id="burger-logo" alt="Logo" height={40} width={40} />
				</div>
			</Link>
			<div className="burger" onClick={onClick}>
				{visible ? <IoClose size={40} /> : <GiHamburgerMenu size={40} />}
			</div>
		</div>
	);
};

export default HamburgerButton;
