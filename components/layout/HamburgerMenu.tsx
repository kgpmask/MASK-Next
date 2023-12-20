import React from "react";
import Link from "next/link";
import HamburgerButton from "./HamburgerButton";
import Menu from "./Menu";

interface HamburgerMenuProps {
	currentPage?: string;
	loggedIn?: boolean;
	userless?: boolean;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ currentPage, loggedIn, userless }) => {
	const links = [
		{ name: "Art", href: "/art" },
		{ name: "Newsletters", href: "/newsletters" },
		{ name: "Videos", href: "/videos" },
		{ name: "Events", href: "/events" },
	];

	return (
		<>
			<HamburgerButton />
			<hr className="plate-bar" />
			<div className="hamburger-menu">
				<div style={{ height: "80px" }}></div>
				<hr id="top-line" />
				<Menu links={links} currentPage={currentPage} loggedIn={loggedIn} userless={userless} />
				<hr className="border-bottom" />
			</div>
		</>
	);
};

export default HamburgerMenu;
