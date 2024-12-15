import React from "react";
import style from "@/styles/MemberCard.module.css"

const MemberCard = ({profilePicture, name, teams, position}) => {
	
	/* We assume that the teams is of the form ["nS", "w", "q"] */
	const teamRoleText = (teamStr) => {
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

		posDict.forEach((value, key) => {
			if (teamStr.includes(key)) ans.concat(value)
		})

		return ans;
	}

	const roleText = (teams) =>{
		;
	}

	return (
		<>
		
		</>
	);
};

export default MemberCard;