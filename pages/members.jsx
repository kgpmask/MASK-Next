import { useRef, createRef } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa6';
import { FaCaretDown } from 'react-icons/fa';
import { useState } from 'react';
import styles from '@/styles/MembersPage.module.css';
import MemberCard from '@/components/MemberCard';
import membersData from '@/public/assets/members/members.json';

// TODO: Populate getMembers() with real member data instead of placeholder entries
function getMembers(selectedYear) {
	const structure = {
		Governor: {
			type: 'vertical',
			members: [],
		},
		'Team Head': {
			type: 'vertical',
			members: [],
		},
		'Team Sub-Head': {
			type: 'horizontal',
			members: [],
		},
		'Research Associate': {
			type: 'horizontal',
			members: [],
		},
		Executive: {
			type: 'horizontal',
			members: [],
		},
		Associate: {
			type: 'horizontal',
			members: [],
		},
		Fresher: {
			type: 'horizontal',
			members: [],
		},
		'Former Member': {
			type: 'vertical',
			members: [],
		},
	};

	for (const member of membersData) {
		if (member.records.length < 1) continue;
		const record = member.records.find(r => r.year === selectedYear);
		if (!record) continue;
		let { position, teams, contacts } = record;

		if (position === "Advisor") continue;

		if (teams.some(t => t.endsWith("H")) && position != 'Governor') position = 'Team Head';
		if (teams.some(t => t.endsWith("S"))) position = 'Team Sub-Head';

		structure[position].members.push({
			profilePicture: member.image,
			name: member.name,
			teams,
			contacts,
		});
	}

	for (const key in structure) {
		structure[key].members.sort((a, b) =>
			a.name.localeCompare(b.name)
		);
	}

	return structure;
}

const getYearOptions = (start, end) =>
	Array.from({ length: start - end + 1 }, (_, i) => {
		const year = start - i;
		return `${year}-${(year + 1).toString().slice(-2)}`;
	});

export default function MembersPage() {

	const allYears = membersData.flatMap(member => member.records.map(r => r.year));
	const minYear = Math.min(...allYears);
	const maxYear = Math.max(...allYears);
	const [selectedYear, setSelectedYear] = useState(maxYear)
	const membersYearOptionsDecorated = getYearOptions(maxYear, minYear);

	const handleYearChange = (e) => {
		const year = Number(e.target.value);
        setSelectedYear(year);
    };
	
	const positions = getMembers(selectedYear);
	
	const horizontalRefs = useRef(
		Object.entries(positions)
			.filter(([_position, data]) => data.type === 'horizontal')
			.map(([position, _data]) => position)
			.reduce((acc, key) => {
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
					<select
						className={styles["members-batch-select"]}
						value={selectedYear}
						onChange={handleYearChange}
					>
						{membersYearOptionsDecorated.map((option) => (
							<option key={option} value={Number(option.split("-")[0])}>
								{`Members: ${option}`}
							</option>
						))}
					</select>
				</div>
				{Object.entries(positions)
					.filter(([_position, data]) => data.members.length > 0)
					.map(([position, data]) =>
					data.type === 'vertical' ? (
						<section key={position}>
							<h2>{position}s</h2>

							<div className={styles['members-section']}>
								{data.members.map((member, idx) => (
									<MemberCard key={idx} {...member} position={position} />
								))}
							</div>
						</section>
					) : (
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
									{data.members.map((member, idx) => (
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
					)
				)}
			</div>
		</>
	);
}
