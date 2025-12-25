import styles from '@/styles/Footer.module.css';
import Image from 'next/image';

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.links}>
				<a href="/privacy">Privacy Policy</a>
				<a href="/terms">Terms of Use</a>
			</div>
			<div>&copy; 2024 Manga and Anime Society Kharagpur. All Rights Reserved.</div>
			<div className={styles.socialIcons}>
				<a href="https://www.instagram.com/maskiitkgp" target="_blank">
					<Image src="/assets/insta.png" alt="Instagram" height={40} width={40} />
				</a>
				<a href="https://www.youtube.com/@maskiitkgp" target="_blank">
					<Image src="/assets/yt.png" alt="YouTube" height={40} width={40} />
				</a>
				<a href="https://www.facebook.com/maskiitkgp" target="_blank">
					<Image src="/assets/fb.png" alt="Facebook" height={40} width={40} />
				</a>
				<a href="mailto:kgpmask@gmail.com" target="_blank">
					<Image src="/assets/mail.png" alt="Email" height={40} width={40} />
				</a>
				<a href="https://github.com/kgpmask" target="_blank">
					<Image src="/assets/github.png" alt="GitHub" height={40} width={40} />
				</a>
			</div>
		</div>
	);
};

export default Footer;
