import styles from '@/styles/Navbar.module.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Button from './Button';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
	const router = useRouter();
	const [active, setActive] = useState(router.pathname);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		if (menuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}

		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [menuOpen]);
	const menuItems = [
		{ name: 'Home', href: '/' },
		{ name: 'Art', href: '/art' },
		{ name: 'Newsletters', href: '/newsletters' },
		{ name: 'Videos', href: '/videos' },
		{ name: 'Events', href: '/events' },
		{ name: 'Members', href: '/members' }
	];

	const handleClick = (href) => {
		setActive(href);
		router.push(href);
	};

	return (
		<>
			<nav className={styles.navbarFull}>
				<ul>
					<div>
						<Link href="/" className={styles.logo}>
							<Image
								height={48}
								width={48}
								src="/assets/logo.jpeg"
								alt="Logo"
								className={styles.navbarLogo}
							/>
						</Link>
					</div>

					<div className={styles.navbarContainer}>
						{menuItems.map((item) =>
							<li key={item.name}>
								<Link
									href={item.href}
									className={`${styles.link} ${
										active === item.href ? styles.active : ''
									}`}
									onClick={(e) => {
										e.preventDefault();
										handleClick(item.href);
									}}
								>
									{item.name}
								</Link>
							</li>
						)}
					</div>
					<div className={styles.but}>
						<Button
							text="About Us"
							url="/#about"
							type="red"
							icon="null"
							styleOverrides={{ height: 36, minWidth: 20 }}
							noIcon
						/>
					</div>
					<div
						className={styles.burger}
						onClick={() => setMenuOpen((prev) => !prev)}
					>
						<div className={styles.patty}></div>
					</div>
				</ul>
			</nav>

			<div
				className={`${styles.slidingMenu} ${menuOpen ? styles.menuOpen : ''}`}
			>
				<div className={styles.menuContent}>
					{menuItems.map((item) =>
						<Link
							key={item.name}
							href={item.href}
							className={styles.menuLink}
							onClick={(e) => {
								e.preventDefault();
								setMenuOpen(false);
								handleClick(item.href);
							}}
						>
							{item.name}
						</Link>
					)}
				</div>
			</div>
		</>
	);
};

export default Navbar;
