import React from 'react';
import { FiArrowRight } from 'react-icons/fi'; // Import right arrow icon
import styles from '../styles/Button.module.css';
import { useRouter } from 'next/router';

import { Cabin } from 'next/font/google';

const cabin = Cabin({ subsets: ['latin'] });

const Button = ({ text, color = 'red', icon: Icon, url, fullWidth, noIcon, styleOverrides }) => {
	const router = useRouter();

	const handleClick = () => {
		if (url) {
			router.push(url); // Route to the specified URL
		}
	};

	const buttonStyles = {
		red: {
			backgroundColor: '#e43332',
			color: '#fff',
		},
		black: {
			backgroundColor: '#000000',
			color: '#fff',
		},
		'trans-white': {
			backgroundColor: 'transparent',
			color: '#fff',
			border: '1px solid #fff',
		},
		'trans-black': {
			backgroundColor: 'transparent',
			color: '#000',
			border: '1px solid #000',
		},
	};

	const style = buttonStyles[color?.toLowerCase()] || buttonStyles['red'];
	if (fullWidth) style.width = '100%';

	if (styleOverrides) {
		Object.assign(style, styleOverrides);
	}

	return (
		<button className={`${styles.button} ${cabin.className}`} style={style} onClick={handleClick}>
			<div className={styles.contentWrapper}>
				<span className={styles.buttonText}>{text}</span>
				{noIcon ?
					null
					:
					Icon ? (
						<span className={styles.buttonIcon}><Icon /></span>
					) : (
						<span className={styles.buttonIcon}><FiArrowRight /></span>
					)}
			</div>
		</button>
	);
};

export default Button;
