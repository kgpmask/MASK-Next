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

export type ProfileType = {
  teamColor: string;
  teamName: string;
};

type MemberProfile = {
  name: string;
  imageLink: string;
  teams: ProfileType[];
};

export default function MembersPage () {
	// const temp = await fetch('/api/members?year=2023');
	// The above doesnt work since making this function async breaks it
	// So for now, we are taking the data from @/utils/samples/members.json
	// The format is assumed to be json with the following fields:
	// > name
	// > image
	// > position
	// > [teams]
	// [teams] is a list of all the teams along with the position in said teams
	// the format of each element in teams is: <'S'/'H'/''> + '_' + <team_name>
	// position should always be singular in the backend
	const data: Array<MemberType> = require('../utils/samples/members.json');

	const status: Record<string, Array<MemberProfile>> = {
		Governor: [],
		'Team Heads': [],
		'Team Sub-Heads': [],
		Advisors: [],
		'Research Associates': [],
		Executives: [],
		Associates: [],
		Freshers: [],
		'Former Members': []
	};
	data.forEach((member) => {
		const teamProfles: Array<ProfileType> = [];
		member.teams.forEach((team) => {
			const [pos, teamName] = team.split('_');
			const teamColor =
        pos === 'H' ? 'yellow' : pos === 'S' ? 'green' : 'white';
			teamProfles.push( { teamName, teamColor } );
		} );
		status[member.position].push( {
			name: member.name,
			imageLink: member.image,
			teams: teamProfles
		} );
	} );
	console.log(data);
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
