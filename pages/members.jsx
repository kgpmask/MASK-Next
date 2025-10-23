import { useRef } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa6';
import { FaCaretDown } from 'react-icons/fa';
import styles from '@/styles/MembersPage.module.css';
import MemberCard from '@/components/MemberCard';

function getMembers() {
	const createMember = (teams = ['a', 'w'], governor = false) => ({
		profilePicture: '24_joshua.webp',
		name: 'Joshua Raj',
		teams,
		contacts: governor
			? {
					email: 'example@example.com',
					instagram: 'example',
			  }
			: undefined,
	});

	return {
		Governor: Array.from({ length: 9 }, () => createMember(['a', 'w'], true)),
		'Team Heads': Array.from({ length: 9 }, (_, i) =>
			createMember(i === 0 ? ['a', 'wH'] : ['a', 'w'])
		),
		'Team Sub-Heads': Array.from({ length: 17 }, (_, i) =>
			createMember(i === 0 || i === 7 ? ['a', 'wS'] : ['a', 'w'])
		),
	};
}

const getYearOptions = (start, end) =>
	Array.from({ length: start - end + 1 }, (_, i) => {
		const year = start - i;
		return `${year}-${(year + 1).toString().slice(-2)}`;
	});

export default function MembersPage() {
	const teamSubHeadSectionRef = useRef(null);
	const positions = getMembers();
	const membersYearOptions = getYearOptions(2025, 2020);

	const scroll = (direction) => {
		if (teamSubHeadSectionRef.current) {
			const container = teamSubHeadSectionRef.current;

			const firstChild = container.children[0];
			if (!firstChild) return;

			const scrollAmount = firstChild.offsetWidth + 20;

			container.scrollBy({
				left: direction === 'right' ? scrollAmount : -scrollAmount,
				behavior: 'smooth',
			});
		}
	};

	return (
		<>
			<div className={styles['members']}>
				<div className={styles['members-batch-container']}>
					<FaCaretDown className={styles['members-batch-down']} />
					<select className={styles['members-batch-select']}>
						{membersYearOptions.map((option) => (
							<option key={option}>{`Members: ${option}`}</option>
						))}
					</select>
				</div>
				<section>
					<h2>Governor</h2>

					<div className={styles['members-section']}>
						{positions['Governor'].map((member, idx) => (
							<MemberCard key={idx} {...member} position="Governor" />
						))}
					</div>
				</section>
				<section>
					<h2>Team Heads</h2>

					<div className={styles['members-section']}>
						{positions['Team Heads'].map((member, idx) => (
							<MemberCard key={idx} {...member} position="Team Head" />
						))}
					</div>
				</section>
				<section>
					<h2>Team Sub-Heads</h2>

					<div className={styles['members-section-horizontal-wrapper']}>
						<button className={styles['members-scroll-button']} onClick={() => scroll('left')}>
							<FaChevronLeft />
						</button>
						<div
							className={`${styles['members-section']} ${styles['members-section-horizontal']}`}
							ref={teamSubHeadSectionRef}
						>
							{positions['Team Sub-Heads'].map((member, idx) => (
								<MemberCard key={idx} {...member} position="Team Sub-Head" isCompact />
							))}
						</div>
						<button
							className={styles['members-scroll-button']}
							style={{ right: '0' }}
							onClick={() => scroll('right')}
						>
							<FaChevronRight />
						</button>
					</div>
				</section>
			</div>
		</>
	);
}
