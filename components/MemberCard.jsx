import React from 'react';
import Image from 'next/image';
import { Cabin } from 'next/font/google';
import styles from '../styles/MemberCard.module.css';


export default function MemberCard({ member }) {
	return (
		<div className={styles.memberCard}>
			<div className={styles.imageWrapper}>
				<Image src={member.image} alt={member.name} width={512} height={512} className={styles.memberImage} />
			</div>
			<div className={styles.textWrapper}>
				<h3 className={styles.memberName}>{member.name}</h3>
				<p className={styles.memberRole}>{member.role}</p>
			</div>
			<div className={styles.socials}>
				<a href={member.socials.email} target="_blank">
					<Image src="/email.svg" alt="email" width={24} height={24} />
				</a>
				<a href={member.socials.insta} target="_blank">
					<Image src="/instagram.svg" alt="instagram" width={24} height={24} />
				</a>
			</div>
		</div>
	);
}

