import React from 'react';
import style from '@/styles/MemberCard.module.css';
import Image from 'next/image';
import { Cabin } from 'next/font/google';
import { MdOutlineEmail } from 'react-icons/md';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

import { BiMoviePlay } from 'react-icons/bi';
import { FaPaintbrush } from 'react-icons/fa6';
import { FiEdit } from 'react-icons/fi';
import { PiListChecksBold } from 'react-icons/pi';
import { FaCode } from 'react-icons/fa6';
import { IoMusicalNotes } from 'react-icons/io5';

const cabin = Cabin({ subsets: ['latin'] });

const Icon = ({ icon, description, modifier }) => {
	return (
		<span title={description}>
			{modifier
				? React.cloneElement(icon, { color: modifier === 'S' ? '#30b868' : '#e8ce3d' })
				: React.cloneElement(icon, { color: 'white' })}
		</span>
	);
};
/* Usage:
 * <MemberCard
 * 		profilePicture="23_manideep.webp" : string
 * 		name="Dalli Manideep" : string
 * 		teams={["nH"]} : array
 * 		position="Governor" : string (optional)
 *		contacts={
 *			email: "example@example.com",
 *			instagram: "arpitchakladar",
 *			linkedin: "arpitchakladar",
 *			github: "arpitchakladar",
 *		} : (optional)
 *      isCompact=false (optional)
 * 	/>
 */
const MemberCard = ({ profilePicture, name, teams, position, contacts, isCompact = false }) => {
	const contactInformation =
		position === 'Governor' && contacts && Object.keys(contacts).length > 0 ? contacts : null;

	const positionNames = { H: 'Head', S: 'Sub-Head' };

	/* We assume that the teams is of the form ["nS", "w", "q"] */
	const teamNames = {
		a: 'AMV',
		d: 'DNA',
		n: 'MN',
		q: 'Quiz',
		w: 'WebD',
		m: 'Music'
	};

	const positionFull =
		position === 'Governor'
			? 'Governor'
			: (() => {
				const teamWithRole = teams.find((team) => team.length === 2 && positionNames[team[1]]);
				return teamWithRole
					? `${teamNames[teamWithRole[0]]} ${positionNames[teamWithRole[1]]}`
					: position;
			  })();

	const positionIcons = {
		a: <BiMoviePlay />,
		d: <FaPaintbrush />,
		n: <FiEdit />,
		q: <PiListChecksBold />,
		w: <FaCode />,
		m: <IoMusicalNotes />,
		c: <FaPaintbrush/>
	};

	const contactIcons = {
		email: <MdOutlineEmail />,
		instagram: <FaInstagram />,
		linkedin: <FaLinkedin />,
		github: <FaGithub />
	};

	const getContactInfoLink = (type, value) => {
		switch (type) {
			case 'email':
				return `mailto:${value}`;
			case 'instagram':
				return `https://www.instagram.com/${value}`;
			case 'github':
				return `https://github.com/${value}`;
			case 'linkedin':
				return `https://www.linkedin.com/in/${value}`;
			default:
				return '';
		}
	};

	return (
		<>
			<div
				className={`${style['member-container']} ${cabin.className} ${
					contactInformation ? style['with-contact-info'] : ''
				} ${isCompact ? style['compact-style'] : ''}`}
			>
				<div className={style['profile-pic']}>
					<Image src={`/assets/members/${profilePicture}`} alt={name} width={250} height={250} />
				</div>
				<div className={style['info-container']}>
					<div className={style['member-info']}>
						<div className={style['member-name']}>{name}</div>
						<div className={style['member-position']}>{positionFull}</div>
					</div>
					<div className={style['team-list']}>
						{teams.map((team, index) =>
							<Icon
								key={index}
								icon={positionIcons[team[0]]}
								description={teamNames[team[0]]}
								modifier={team.length === 2 ? team[1] : false}
							/>
						)}
					</div>
				</div>
				{contactInformation &&
					<div className={style['contact-info-container']}>
						{Object.entries(contacts).map(([type, value]) =>
							<a
								href={getContactInfoLink(type, value)}
								key={type}
								className={style['contact-info']}
							>
								{contactIcons[type]}
							</a>
						)}
					</div>
				}
			</div>
		</>
	);
};

export default MemberCard;
