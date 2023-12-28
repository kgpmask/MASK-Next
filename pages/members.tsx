import HeadContent from '@/components/HeadContent';
import styles from '@/styles/Members.module.css';
import Member from '@/components/Member';
import { YearDataType } from './api/members';
import { useEffect, useState } from 'react';

type TeamType = {
	teamColor: string;
	teamIcon: string;
};

type MemberProfile = {
	name: string;
	imageLink: string;
	teams: TeamType[];
};

export default function MembersPage() {
	const [personsRecord, setPersonsRecord] = useState<Record<string, MemberProfile[]>>({});
	const [yearRecord, setYearRecord] = useState<number>(2023);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const temp = await fetch(`/api/members?year=${yearRecord}`);
				const data: [string, YearDataType[]][] = await temp.json();
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

				data.forEach(([position, members]) => {
					members.forEach((person) => {
						const teamsArray: TeamType[] = person.teams.map((team) => ({
							teamColor: team[1] === 'H' ? 'yellow' : team[1] === 'S' ? 'green' : 'white',
							teamIcon: team[0],
						}));

						memberArray[position].push({
							name: person.name,
							imageLink: person.image,
							teams: teamsArray,
						});
					});
				});

				setPersonsRecord(memberArray);
			} catch (e) {
				console.log(e);
			}
		};

		fetchData();
	}, [yearRecord]);

	return (
		<>
			<HeadContent title="Our Members" />
			<div id="loaded" style={{ display: 'none' }}>
				<h1>Our Members</h1>
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
				{/* Add the buttons for prev and next here */}
			</div>
			{/* Include the loading screen component here */}
		</>
	);
}
