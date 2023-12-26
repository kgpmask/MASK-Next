import Link from 'next/link';
import React from 'react';


interface NavbarItemProps {
	label: string;
	link: string;
	isCurrent?: Boolean;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label, link, isCurrent }) => {
	return (
		<Link href={link} className={isCurrent ? 'active-page' : ''}>
			{label}
		</Link>
	);
};

export default NavbarItem;
