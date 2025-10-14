import React from "react";
import style from "@/styles/MemberCard.module.css"
import Image from "next/image";
import { Cabin } from "next/font/google";

import { BiMoviePlay } from "react-icons/bi";
import { FaPaintbrush } from "react-icons/fa6";
import { TfiWrite } from "react-icons/tfi";
import { PiListChecksBold } from "react-icons/pi";
import { FaCode } from "react-icons/fa6";

const cabin = Cabin({ subsets: ['latin'] });

const Icon = ({ icon, description, modifier }) => {
	return (
		<span title={description}>
			{modifier ?
				React.cloneElement(icon, { color: modifier === 'S' ? '#30b868' : '#e8ce3d' })
				:
				React.cloneElement(icon, { color: "white" })
			}
		</span>
	);

}
/* Usage:
 * <MemberCard 
 * 		profilePicture="23_manideep.webp" : string
 * 		name="Dalli Manideep" : string
 * 		teams={["nH"]} : array
 * 		position="Governor" : string (optional)
 * 	/>
 */
const MemberCard = ({ profilePicture, name, teams, position }) => {
	/* We assume that the teams is of the form ["nS", "w", "q"] */
	const teamDict = {
		"a": "AMV",
		"d": "Design and Arts",
		"n": "Media and Newsletter",
		"q": "Quiz",
		"w": "Web Development"
	};

	const iconMap = {
		"a": <BiMoviePlay />,
		"d": <FaPaintbrush />,
		"n": <TfiWrite />,
		"q": <PiListChecksBold />,
		"w": <FaCode />
	}
	
	const roleText = () => {
		if (position === "Governor") return "Governor";
		else {
			for (let team of teams) {
				if (team.length === 2) {
					if (team[1] === "H") return teamDict[team[0]] + " Head";
					else if (team[1] === "S") return teamDict[team[0]] + " Sub-Head";
				}
			}
			return position;
		}
	}

	return (
		<>
			<div className={`${style["member-container"]} ${cabin.className}`}>
				<div className={style["profile-pic"]}>
					<Image src={`/assets/members/${profilePicture}`} alt={name} width={200} height={200} />
				</div>
				<div className={style["info-container"]}>
					<div className={style["member-info"]}>
						<div className={style["member-name"]}>{name}</div>
						<div className={style["member-position"]}>{roleText()}</div>
					</div>
					<div className={style["team-list"]}>
						{teams.map((team, index) => (
							<Icon key={index} icon={iconMap[team[0]]} description={teamDict[team[0]]} modifier={team.length === 2 ? team[1] : false} />
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default MemberCard;
