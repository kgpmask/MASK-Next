import React from "react";
import style from "@/styles/MemberCard.module.css"

const MemberCard = ({profilePicture, name, teams, position}) => {
	
	/* We assume that the teams is of the form ["nS", "w", "q"] */
	const teamRoleText = (teamStr, position) => {
		let ans = "";
		if (teamStr.length > 3) return "";

		const teamDict = {
			"a" : "AMV",
			"d" : "Design and Arts",
			"n" : "Media and Newsletter",
			"q" : "Quiz",
			"w" : "Web Development"
		};
		
		const posDict = {
			"S" : "Sub-Head",
			"H" : "Head"
		};

		teamDict.forEach((value, key) => {
			if (teamStr.includes(key)) ans.concat(value)
		});

		ans.concat(" ");
		
		let isPosIncluded = 1;
		
		posDict.forEach((value, key) => {
			if (teamStr.includes(key)) {
				ans.concat(value);
				flag = 0;
			}
		})

		if (isPosIncluded){
			ans.concat(position)
		}

		return ans;
	}

	const roleText = (teams, position) =>{
		const comp = (teamStr1, teamStr2) => {
			let val = 0;
			if (val = teamStr2.includes("H")) return val;
			if (val = teamStr2.includes("S")) return val;
			return val;
		}
		//Comparison for position.
		
		teams.sort(comp);

		
	}

	return (
		<>
		<div className="profile-pic">
			<img src={profilePicture} alt={name} />
		</div>
		<div className="info-container">
			<div className="member-name">
				<h2>{name}</h2>
			</div>
			<div className="member-position">
				{roleText(teams, position)}
			</div>
			<div className="team-list"></div>
		</div>
		</>
	);
};

export default MemberCard;