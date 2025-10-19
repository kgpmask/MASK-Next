import { useState } from 'react';
import { FaChevronRight, FaAngleLeft } from "react-icons/fa6";
import Carousel from 'react-simply-carousel';
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

const subTeamHeads = [
	{ profilePicture: '24_joshua.webp', name: 'Joshua Raj 1', teams: ['a', 'w'] },
	{ profilePicture: '24_joshua.webp', name: 'Joshua Raj 2', teams: ['a', 'w'] },
	{ profilePicture: '24_joshua.webp', name: 'Joshua Raj 3', teams: ['a', 'w'] },
	{ profilePicture: '24_joshua.webp', name: 'Joshua Raj 4', teams: ['a', 'w'] },
	{ profilePicture: '24_joshua.webp', name: 'Joshua Raj 5', teams: ['a', 'w'] },
	{ profilePicture: '24_joshua.webp', name: 'Joshua Raj 6', teams: ['a', 'w'] },
	{ profilePicture: '24_joshua.webp', name: 'Joshua Raj 7', teams: ['a', 'w'] },
	{ profilePicture: '24_joshua.webp', name: 'Joshua Raj 8', teams: ['a', 'w'] },
];

export default function MembersPage() {
	const [subTeamHeadsCourselIdx, setSubTeamHeadsCourselIdx] = useState(0);

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
				<h2>Team Sub-Heads</h2>
				<div className={styles['team-sub-heads-carousel']}>
					<Carousel
						activeSlideIndex={subTeamHeadsCourselIdx}
						onRequestChange={setSubTeamHeadsCourselIdx}
						forwardBtnProps={{
							children: <FaChevronRight />,
							style: {
								right: 0,
							}
						}}
						backwardBtnProps={{
							children: <FaAngleLeft />
						}}
						infinite={false}
						centerMode
						speed={700}
					>
						{subTeamHeads.map(member => (
							<div className={styles['team-sub-head-member-card']}>
								<MemberCard {...member} position="Team Sub-Heads" />
							</div>
						))}
					</Carousel>
				</div>
			</div>
		</>
	);
}
