import {
	GiChecklist,
	GiLaptop,
	GiPaintBrush,
	GiPencil,
	GiTv
} from 'react-icons/gi';

import HeadContent from '@/components/HeadContent';

import styles from '@/styles/Members.module.css';
import Member from '@/components/Member';
import { MemberType } from '@/utils/models/Member';
import { useEffect, useState } from 'react';

type TeamType = {
  teamColor: string;
  teamIcon: string;
};

type MemberProfile = {
  name: string;
  imageLink: string;
  position: string;
  teams: TeamType[];
};

// export type MemberType = {
//   name: string;
//   image: string;
//   position: string;
//   teams: string[];
// };

export default function MembersPage () {
	const [personsRecord, setPersonsRecord] = useState<MemberProfile[]>([]);
	const [yearRecord, setYearRecord] = useState<Number>(2023);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const temp = await fetch(`/api/members?year=${yearRecord}`);
				const data: MemberType[] = await temp.json();
				// Start
				const memberArray: MemberProfile[] = [];
				data.forEach((person) => {
					const teamsArray: TeamType[] = [];
					person.teams.forEach((team) => {
						teamsArray.push( {
							teamColor:
                team[1] === 'H'
                	? 'yellow'
                	: team[1] === 'S'
                		? 'green'
                		: 'white',
							teamIcon: team[0]
						} );
					} );
					memberArray.push( {
						name: person.name,
						imageLink: person.image,
						position: person.position,
						teams: teamsArray
					} );
				} );
				setPersonsRecord(memberArray);
				// End
			} catch (e) {
				console.log(e);
			}
		};
		fetchData();
	}, [yearRecord]);

	console.log(personsRecord);

	const records = {
		'Team Heads': [
			{
				name: 'Parth Mane',
				image: '/members/19_parth.webp',
				teams: [
					{ title: 'AMV & Music', Icon: GiTv },
					{ title: 'Media & Newsletter', Icon: GiPencil },
					{ title: 'Quiz', Icon: GiChecklist },
					{ title: 'WebDev', Icon: GiLaptop, color: 'yellow' }
				]
			}
		],
		'Team Sub-Heads': [
			{
				name: 'Vidunram A R',
				image: '/members/21_vidunram.webp',
				teams: [
					{ title: 'Media & Newsletter', Icon: GiPencil },
					{ title: 'Quiz', Icon: GiChecklist },
					{ title: 'WebDev', Icon: GiLaptop, color: 'green' }
				],
				color: 'green'
			}
		],
		Developers: [
			{
				name: 'Ankan Saha',
				image: '/members/22_ankan.webp',
				teams: [
					{ title: 'Quiz', Icon: GiChecklist },
					{ title: 'Web Development', Icon: GiLaptop }
				]
			},
			{
				name: 'Jai Sachdev',
				image: '/members/22_jai.webp',
				teams: [{ title: 'Web Development', Icon: GiLaptop }]
			},
			{
				name: 'Sahil Patel',
				image: '/members/22_sahil.webp',
				teams: [
					{ title: 'Design & Arts', Icon: GiPaintBrush },
					{ title: 'Web Development', Icon: GiLaptop }
				]
			},
			{
				name: 'Soumil Maiti',
				image: '/members/22_soumil.webp',
				teams: [
					{ title: 'Quiz', Icon: GiChecklist },
					{ title: 'Web Development', Icon: GiLaptop }
				]
			}
		]
	};

	return (
		<>
			<HeadContent title="Our Members" />
			<h1> Our Members </h1>
			{Object.entries(records).map(
				([position, members]) =>
					Boolean(members.length) && 
            <div className={styles['status']} key={position}>
            	<h2>
            		<u>{position}</u>
            	</h2>
            	<div className={styles['yearbox']}>
            		<div className={styles['list']}>
            			{members.map(( { name, image, teams } ) => 
            				<Member
            					key={image}
            					name={name}
            					image={image}
            					teams={teams}
            				/>
            			)}
            		</div>
            	</div>
            </div>
          
			)}
		</>
	);
}
