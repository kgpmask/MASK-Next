import React from "react";
import EventCard from "../components/EventCard";
import styles from "../styles/Home.module.css";
import HeroBanner from "@/components/HeroBanner";
import MemberCard from "@/components/MemberCard";
export default function Home() {
	const sampleEvents = [
		{
			image: '/assets/events/ocaq.jpg',
			title: 'Open Campus Anime Quiz',
			date: 'September 3, 2023',
			venue: 'Raman Auditorium, Main Building',
			author: 'NPC',
			description:
				'MASK\'s Open Campus Anime Quiz was back, and it did not disappoint! The atmosphere crackled with energy as questions flew back and forth, with each answer met by cheers and groans.',
		},
		{
			image: '/assets/events/ocaq.jpg',
			title: 'Open Campus Anime Quiz',
			date: 'September 3, 2023',
			venue: 'Raman Auditorium, Main Building',
			author: 'NPC',
			description:
				'MASK\'s Open Campus Anime Quiz was back, and it did not disappoint! The atmosphere crackled with energy as questions flew back and forth, with each answer met by cheers and groans.',
		},
		{
			image: '/assets/events/ocaq.jpg',
			title: 'Open Campus Anime Quiz',
			date: 'September 3, 2023',
			venue: 'Raman Auditorium, Main Building',
			author: 'NPC',
			description:
				'MASK\'s Open Campus Anime Quiz was back, and it did not disappoint! The atmosphere crackled with energy as questions flew back and forth, with each answer met by cheers and groans.',
		},
	];

	return (
		<div className={styles.container} style={{ display: 'flex', flexDirection: 'column', alignItems: "center" }}>
			<div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
				<MemberCard
					profilePicture={"23_manideep.webp"}
					name={"Manideep Dalli"}
					teams={["w", "q"]}
					position={"Associate"}
				/>
				<MemberCard
					profilePicture={"23_thanush.webp"}
					name={"Manideep Dalli"}
					teams={["nH", "w", "q"]}
					position={"Associate"}
				/>
				<MemberCard
					profilePicture={"23_animesh.webp"}
					name={"Manideep Dalli"}
					teams={["n", "qS"]}
					position={"Governor"}
				/>
				<MemberCard
					profilePicture={"23_arnab.webp"}
					name={"Manideep Dalli"}
					teams={["wS"]}
					position={"Associate"}
				/>
			</div>
			<div className={styles.eventsContainer} style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: "80%", justifyContent: "center" }}>
				{sampleEvents.map((event, index) => (
					<EventCard key={index} event={event} />
				))}
			</div>

			<div>
				<HeroBanner heroTitle="Check out our Talented Artists" heroContent="We feature a diverse range of work from talented artists within our society. From traditional  to digital art, each piece reflects unique creativity and vision. " buttonContent="Check out our content on Instagram" />
			</div>
		</div>
	);
}
