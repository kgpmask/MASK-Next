import { useState } from 'react';
import { FaChevronRight, FaAngleLeft } from "react-icons/fa6";
import Carousel from 'react-simply-carousel';
import styles from '@/styles/MembersPage.module.css';
import MemberCard from '@/components/MemberCard';

function getMembers() {
	return [
		{
			position: "Governor",
			members: [
				{ profilePicture: '24_joshua.webp', name: 'Joshua Raj', teams: ['a', 'w'] },
				{ profilePicture: '24_joshua.webp', name: 'Joshua Raj', teams: ['a', 'w'] },
				{ profilePicture: '24_joshua.webp', name: 'Joshua Raj', teams: ['a', 'w'] },
				{ profilePicture: '24_joshua.webp', name: 'Joshua Raj', teams: ['a', 'w'] },
				{ profilePicture: '24_joshua.webp', name: 'Joshua Raj', teams: ['a', 'w'] },
				{ profilePicture: '24_joshua.webp', name: 'Joshua Raj', teams: ['a', 'w'] },
				{ profilePicture: '24_joshua.webp', name: 'Joshua Raj', teams: ['a', 'w'] },
			]
		},
		{
			position: "Team Heads",
			members: [
				{ profilePicture: '24_joshua.webp', name: 'Joshua Raj', teams: ['a', 'wH'] },
				{ profilePicture: '24_joshua.webp', name: 'Joshua Raj', teams: ['a', 'w'] },
				{ profilePicture: '24_joshua.webp', name: 'Joshua Raj', teams: ['a', 'w'] },
				{ profilePicture: '24_joshua.webp', name: 'Joshua Raj', teams: ['a', 'w'] },
				{ profilePicture: '24_joshua.webp', name: 'Joshua Raj', teams: ['a', 'w'] },
				{ profilePicture: '24_joshua.webp', name: 'Joshua Raj', teams: ['a', 'w'] },
				{ profilePicture: '24_joshua.webp', name: 'Joshua Raj', teams: ['a', 'w'] },
			]
		},
		{
			position: "Team Sub-Heads",
			isCarousel: true,
			members: [
				{ profilePicture: '24_joshua.webp', name: 'Joshua Raj', teams: ['a', 'wS'] },
				{ profilePicture: '24_joshua.webp', name: 'Joshua Raj', teams: ['a', 'w'] },
				{ profilePicture: '24_joshua.webp', name: 'Joshua Raj', teams: ['a', 'w'] },
				{ profilePicture: '24_joshua.webp', name: 'Joshua Raj', teams: ['a', 'w'] },
				{ profilePicture: '24_joshua.webp', name: 'Joshua Raj', teams: ['a', 'w'] },
				{ profilePicture: '24_joshua.webp', name: 'Joshua Raj', teams: ['a', 'w'] },
				{ profilePicture: '24_joshua.webp', name: 'Joshua Raj', teams: ['a', 'w'] },
				{ profilePicture: '24_joshua.webp', name: 'Joshua Raj', teams: ['a', 'wS'] },
				{ profilePicture: '24_joshua.webp', name: 'Joshua Raj', teams: ['a', 'w'] },
				{ profilePicture: '24_joshua.webp', name: 'Joshua Raj', teams: ['a', 'w'] },
				{ profilePicture: '24_joshua.webp', name: 'Joshua Raj', teams: ['a', 'w'] },
				{ profilePicture: '24_joshua.webp', name: 'Joshua Raj', teams: ['a', 'w'] },
				{ profilePicture: '24_joshua.webp', name: 'Joshua Raj', teams: ['a', 'w'] },
				{ profilePicture: '24_joshua.webp', name: 'Joshua Raj', teams: ['a', 'w'] },
			]
		},
	]
}
 
export default function MembersPage(){
	const [subTeamHeadsCourselIdx, setSubTeamHeadsCourselIdx] = useState(0);

	const positions = getMembers();

	return (
		<>
			<div className={styles['members']}>
				{positions.map((position) => (
					<section key={position.position}>
						<h2>{position.position}</h2>
						{position.isCarousel ? <div className={styles['members-carousel']}>
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
								{position.members.map((member, idx) => (
									<div key={idx} className={styles['member-card-wrapper']}>
										<MemberCard {...member} position={position.position} isCarousel />
									</div>
								))}
							</Carousel>
						</div>
						: <div className={styles['members-section']}>
							{position.members.map((member, idx) => <MemberCard key={idx} {...member} position={position.position} />)}
						</div>
						}
					</section>
				))}
			</div>
		</>
	);
}
