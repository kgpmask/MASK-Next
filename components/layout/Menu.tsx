import React from 'react';
import MenuItem from './MenuItem';

interface MenuProps {
	links: { name: string; href: string }[];
	currentPage?: string;
	loggedIn?: boolean;
	userless?: boolean;
}

const Menu: React.FC<MenuProps> = ({ links, currentPage, loggedIn, userless }) => {
	return (
		<>
			{links.map( ({ name, href }, index ) => 
				<React.Fragment key={href}>
					<MenuItem label={name} link={href} isCurrent={currentPage === href.slice( 1 )} />
					{index !== links.length - 1 && <hr className="minor" />}
				</React.Fragment>
			)}

			<a href="/about" target="_self">
				<div className={`lettuce${currentPage === 'about' ? ' active-page' : ''}`} id="most-bottom">
					Our Society
				</div>
			</a>
			<hr className="minor lower-border" />

			<a href="/members" target="_self">
				<div className={`lettuce${currentPage === 'members' ? ' active-page' : ''}`} id="almost-bottom">
					Our Members
				</div>
			</a>
			<hr className="minor lower-border lower-border-upper" />

			{loggedIn ? 
				<a href="/profile" target="_self">
					<div className={`lettuce${currentPage === 'profile' ? ' active-page' : ''}${userless ? ' disabled' : ''}`} id="top-bottom">
						Profile
					</div>
				</a>
			 : 
				<a href="/login" target="_self">
					<div className={`lettuce${currentPage === 'login' ? ' active-page' : ''}${userless ? ' disabled' : ''}`} id="top-bottom">
						Login
					</div>
				</a>
			}
			<hr className="border-bottom" />
		</>
	);
};

export default Menu;
