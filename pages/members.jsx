import styles from '@/styles/MembersPage.module.css';
import MemberCard from '@/components/MemberCard';

const members = {
	"Governors": [
		{ profilePicture: '24_joshua.webp', name: 'Joshua Raj', teams: ['a', 'w'] },
		{ profilePicture: '24_joshua.webp', name: 'Joshua Raj', teams: ['a', 'w'] },
		{ profilePicture: '24_joshua.webp', name: 'Joshua Raj', teams: ['a', 'w'] },
		{ profilePicture: '24_joshua.webp', name: 'Joshua Raj', teams: ['a', 'w'] },
		{ profilePicture: '24_joshua.webp', name: 'Joshua Raj', teams: ['a', 'w'] },
	],
	"Team Heads": [
		{ profilePicture: '24_joshua.webp', name: 'Joshua Raj', teams: ['a', 'w'] },
		{ profilePicture: '24_joshua.webp', name: 'Joshua Raj', teams: ['a', 'w'] },
		{ profilePicture: '24_joshua.webp', name: 'Joshua Raj', teams: ['a', 'w'] },
		{ profilePicture: '24_joshua.webp', name: 'Joshua Raj', teams: ['a', 'w'] },
	]
}

export default function MembersPage() {
	return (
		<>
			<div className={styles['members']}>
				{Object.entries(members).map(([position, members]) => (
					<>
						<h2>{position}</h2>
						<div className={styles['members-section']}>
							{members.map(member => <MemberCard {...member} position={position} />)}
						</div>
					</>
				))}
			</div>
		</>
	);
}