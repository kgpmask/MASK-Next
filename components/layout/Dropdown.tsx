import React from 'react';
import DropdownItem from './DropdownItem';
import Link from 'next/link';

interface DropdownProps {
	links: { name: string; href: string }[];
	loggedIn?: boolean;
	currentPage?: string;
	userless?: boolean; // Added userless prop
}

const Dropdown: React.FC<DropdownProps> = ({ links, loggedIn, currentPage, userless }) => {
	return (
		<div style={{ float: 'right' }} id="dropdown">
			<Link href="/about" className="dropbtn" target="_self">
				About
			</Link>
			<div className="dropdown-content">
				{links.map( ({ name, href }) => 
					<DropdownItem label={name} link={href} isCurrent={currentPage === href.slice( 1 )} key={href} /> )}
				{loggedIn ? <DropdownItem label="Profile" link="/profile" isCurrent={currentPage === 'profile'} /> : <DropdownItem label="Login" link="/login" isCurrent={currentPage === 'login'} disabled={userless} />}
			</div>
		</div>
	);
};

export default Dropdown;
