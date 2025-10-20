import { useState } from 'react';
import { FaChevronRight, FaAngleLeft } from 'react-icons/fa6';
import { FaCaretDown } from 'react-icons/fa';
import Carousel from 'react-simply-carousel';
import styles from '@/styles/MembersPage.module.css';
import MemberCard from '@/components/MemberCard';

function getMembers() {
	const createMember = (teams = ['a', 'w']) => ({
		profilePicture: '24_joshua.webp',
		name: 'Joshua Raj',
		teams,
	});

	return [
		{
			position: 'Governor',
			members: Array.from({ length: 7 }, () => createMember()),
		},
		{
			position: 'Team Heads',
			members: Array.from({ length: 7 }, (_, i) =>
				createMember(i === 0 ? ['a', 'wH'] : ['a', 'w'])
			),
		},
		{
			position: 'Team Sub-Heads',
			isCarousel: true,
			members: Array.from({ length: 14 }, (_, i) =>
				createMember(i === 0 || i === 7 ? ['a', 'wS'] : ['a', 'w'])
			),
		},
	];
}

const getYearOptions = (start, end) =>
	Array.from({ length: start - end + 1 }, (_, i) => {
		const year = start - i;
		return `${year}-${(year + 1).toString().slice(-2)}`;
	});

export default function MembersPage() {
	const [subTeamHeadsCourselIdx, setSubTeamHeadsCourselIdx] = useState(0);

	const positions = getMembers();
	const membersYearOptions = getYearOptions(2025, 2020);

	return (
		<>
			<div className={styles['members']}>
				<div className={styles['members-batch-container']}>
					<FaCaretDown className={styles['members-batch-down']} />
					<select className={styles['members-batch-select']}>
						{membersYearOptions.map((option) => (
							<option>{`Members: ${option}`}</option>
						))}
					</select>
				</div>
				{positions.map((position) => (
					<section key={position.position}>
						<h2>{position.position}</h2>
						{position.isCarousel ? (
							<div className={styles['members-carousel']}>
								<Carousel
									containerProps={{
										className: styles['members-carousel-container'],
									}}
									activeSlideIndex={subTeamHeadsCourselIdx}
									onRequestChange={setSubTeamHeadsCourselIdx}
									forwardBtnProps={{
										children: <FaChevronRight />,
										className: styles['members-carousel-button'],
										style: {
											right: 0,
										},
									}}
									backwardBtnProps={{
										children: <FaAngleLeft />,
										className: styles['members-carousel-button'],
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
						) : (
							<div className={styles['members-section']}>
								{position.members.map((member, idx) => (
									<MemberCard key={idx} {...member} position={position.position} />
								))}
							</div>
						)}
					</section>
				))}
			</div>
		</>
	);
}
