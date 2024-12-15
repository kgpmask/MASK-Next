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

		Object.entries(teamDict).forEach(([key, value]) => {
			if (teamStr.includes(key)) ans += (value);
		});

		ans += (" ");
		
		let isPosIncluded = 1;
		
		Object.entries(posDict).forEach(([key, value]) => {
			if (teamStr.includes(key)) {
				ans += (value);
				isPosIncluded = 0;
			}
		})

		if (isPosIncluded){
			ans += (position)
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
		// console.log(teamRoleText(teams[0]), position);	
		return teamRoleText(teams[0], position);
	}

	return (
		<>
		<div className={style["member-container"]}>
			<div className={style["profile-pic"]}>
				<img src={profilePicture} alt={name} />
			</div>
			<div className={style["info-container"]}>
				<div className={style["member-name"]}>
					<h2>{name}</h2>
				</div>
				<div className={style["member-position"]}>
					<h3>{roleText(teams, position)}</h3>
				</div>
				<div className={style["team-list"]}></div>
			</div>
		</div>
		</>
	);
};

export default MemberCard;