import { useEffect, useState } from 'react';
import iconMap from '@/utils/data/teamIconMap';
import { IconType } from 'react-icons';
import Link from 'next/link';

import HeadContent from '@/components/HeadContent';
import styles from '@/styles/Members.module.css';
import Member from '@/components/Member';

type TeamType = {
	teamColor: string;
	teamIcon: IconType;
	teamTitle: string;
};

type MemberProfile = {
	name: string;
	imageLink: string;
	teams: TeamType[];
};

export default function MembersPage() {
	const [hasLoaded, setHasLoaded] = useState(false);
	const [personsRecord, setPersonsRecord] = useState<Record<string, MemberProfile[]>>({});
	const [yearRecord, setYearRecord] = useState<number>(2023);
	const [membersTitle, setMembersTitle] = useState<string>('Our Members');
	const [prev, setPrev] = useState<string | undefined>(undefined);
	const [next, setNext] = useState<string | undefined>(undefined);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const temp = await fetch(`/api/members?year=${yearRecord}`);
				const data = await temp.json();

				const memberArray: Record<string, MemberProfile[]> = {
					Governors: [],
					'Team Heads': [],
					'Team Sub-Heads': [],
					Advisors: [],
					'Research Associate': [],
					Executives: [],
					Associates: [],
					Freshers: [],
					'Former Members': [],
				};

				data.membersObj?.forEach(([position, members]: [string, any[]]) => {
					members.forEach((person: any) => {
						const teamsArray: TeamType[] = person.teams.map((team: string) => ({
							teamColor: team[1] === 'H' ? 'yellow' : team[1] === 'S' ? 'green' : 'white',
							teamIcon: iconMap[yearRecord][team[0]]?.icon,
							teamTitle: iconMap[yearRecord][team[0]]?.name,
						}));

						memberArray[position].push({
							name: person.name,
							imageLink: person.image,
							teams: teamsArray,
						});
					});
				});

				setPersonsRecord(memberArray);
				setMembersTitle(data.membersTitle);
				setPrev(data.prev);
				setNext(data.next);
				setHasLoaded(true);
			} catch (e) {
				console.log(e);
			}
		};

		fetchData();
	}, [yearRecord]);

	return (
		<>
			<HeadContent title="Our Members" />
			<div id="loaded" style={{ display: hasLoaded ? '' : 'none' }}>
				<h1>{membersTitle}</h1>
				{Object.entries(personsRecord).map(
					([position, members]) =>
						Boolean(members.length) && (
							<div className={styles['status']} key={position}>
								<h2>
									<u>{position}</u>
								</h2>
								<div className={styles['yearbox']}>
									<div className={styles['list']}>
										{members.map(({ name, imageLink, teams }: MemberProfile) => (
											<Member key={imageLink} name={name} image={imageLink} teams={teams} />
										))}
									</div>
								</div>
							</div>
						)
				)}
				<div>
					{/* prev && (
						<Link href={`/members/${prev}`}>
							<button className={styles['year-button']}>{prev}</button>
						</Link>
					)}
					{next && (
						<Link href={`/members/${next}`}>
							<button className={styles['year-button']}>{next}</button>
						</Link>
					) */}
				</div>
			</div>
		</>
	);
}
