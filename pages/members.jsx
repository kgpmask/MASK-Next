import { useRef, createRef } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa6';
import { FaCaretDown } from 'react-icons/fa';
import styles from '@/styles/MembersPage.module.css';
import MemberCard from '@/components/MemberCard';

// TODO: Populate getMembers() with real member data instead of placeholder entries
function getMembers() {
	const createMember = (teams = ['a', 'w'], governor = false) => ({
		profilePicture: '24_joshua.webp',
		name: 'Joshua Raj',
		teams,
		contacts: governor
			? {
					email: 'example@example.com',
					instagram: 'example',
					github: 'example',
			  }
			: undefined,
	});

	return {
		vertical: {
			Governor: Array.from({ length: 9 }, () => createMember(['a', 'w'], true)),
			'Team Head': Array.from({ length: 9 }, (_, i) =>
				createMember(i === 0 ? ['a', 'wH'] : ['a', 'w'])
			),
		},
		horizontal: {
			'Team Sub-Head': Array.from({ length: 17 }, (_, i) =>
				createMember(i === 0 || i === 7 ? ['a', 'wS'] : ['a', 'w'])
			),
			Executive: Array.from({ length: 17 }, (_, i) =>
				createMember(i === 0 || i === 7 ? ['a', 'wS'] : ['a', 'w'])
			),
			Associate: Array.from({ length: 17 }, (_, i) =>
				createMember(i === 0 || i === 7 ? ['a', 'wS'] : ['a', 'w'])
			),
			Fresher: Array.from({ length: 17 }, (_, i) =>
				createMember(i === 0 || i === 7 ? ['a', 'wS'] : ['a', 'w'])
			),
			'Former member': Array.from({ length: 17 }, (_, i) =>
				createMember(i === 0 || i === 7 ? ['a', 'wS'] : ['a', 'w'])
			),
		},
	};
}

const getYearOptions = (start, end) =>
	Array.from({ length: start - end + 1 }, (_, i) => {
		const year = start - i;
		return `${year}-${(year + 1).toString().slice(-2)}`;
	});

export default function MembersPage() {
	const positions = getMembers();
	const membersYearOptions = getYearOptions(2025, 2020);
	const horizontalRefs = useRef(
		Object.keys(positions.horizontal).reduce((acc, key) => {
			acc[key] = createRef();
			return acc;
		}, {})
	);

	const scroll = (position, direction) => {
		const container = horizontalRefs.current[position]?.current;
		if (!container) return;

		const firstChild = container.children[0];
		if (!firstChild) return;

		const scrollAmount = firstChild.offsetWidth * 2;
		container.scrollBy({
			left: direction === 'right' ? scrollAmount : -scrollAmount,
			behavior: 'smooth',
		});
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
				{Object.entries(positions.vertical).map(([position, members]) => (
					<section key={position}>
						<h2>{position}s</h2>

						<div className={styles['members-section']}>
							{members.map((member, idx) => (
								<MemberCard key={idx} {...member} position={position} />
							))}
						</div>
					</section>
				))}
				{Object.entries(positions.horizontal).map(([position, members]) => (
					<section key={position}>
						<h2>{position}s</h2>

						<div className={styles['members-section-horizontal-wrapper']}>
							<button
								className={styles['members-scroll-button']}
								onClick={() => scroll(position, 'left')}
							>
								<FaChevronLeft />
							</button>
							<div
								className={`${styles['members-section']} ${styles['members-section-horizontal']}`}
								ref={horizontalRefs.current[position]}
							>
								{members.map((member, idx) => (
									<MemberCard key={idx} {...member} position={position} isCompact />
								))}
							</div>
							<button
								className={styles['members-scroll-button']}
								style={{ right: '0' }}
								onClick={() => scroll(position, 'right')}
							>
								<FaChevronRight />
							</button>
						</div>
					</section>
				))}
			</div>
		</>
	);
}
