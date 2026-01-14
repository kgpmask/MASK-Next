import Image from 'next/image';
import Button from '@/components/Button';
import styles from '@/styles/home/HomePage.module.css';

const teams = [
	{
		title: 'Quiz Team',
		icon: '/assets/icons/quiz.svg',
		description:
			`The Quiz team works on making engaging anime quizzes and puzzles for various events, competition and newsletter. 
			They also work on handling the schematics of the event.`
	},
	{
		title: 'AMV Team',
		icon: '/assets/icons/amv.svg',
		description:
			`They work on making AMVs, be it full-fledged 3-minute videos or small 30-second reels. 
			They also make the promotional videos of the events as well as live coverage videos.`
	},
	{
		title: 'WebD Team',
		icon: '/assets/icons/webdev.svg',
		description:
			`WebDev team ensures the smooth digital experiences, managing our website and making it easy for everyone to connect.`
	},
	{
		title: 'DNA Team',
		icon: '/assets/icons/design.svg',
		description:
			`The Design and Arts team is involved in making fan arts, be it traditional or digital. 
			They also work on making the designs of the posters, merchandise and even the website.`
	},
	{
		title: 'MN Team',
		icon: '/assets/icons/newsletter.svg',
		description:
			`They are in charge of handling our social media and responsible for releasing newsletters. 
			Check them out for interesting articles and puzzles.`
	},
	{
		title: 'Music Team',
		icon: '/assets/icons/music.svg',
		description:
			`Lorem ipsum odor amet, consectetuer adipiscing elit. Odio iaculis primis nisi imperd`
	}
];

export default function AboutUsSection () {
	return (
		<div className={styles['header-content']}>
			<div className={styles['about-container']}>
				<div className={styles['about-content']}>
					<p className={styles['about-title']}>About Us</p>
					<p className={styles['about-subtitle']}>
            OUR SOCIETY CONSISTS OF FIVE TEAMS.
					</p>
					<p className={styles['about-description']}>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Dui volutpat
            torquent netus est augue. Commodo risus vel adipiscing, est
            convallis nostra. Class fringilla etiam dis tellus suscipit
            adipiscing fusce curabitur. Proin pellentesque nascetur consectetur
            convallis, varius quisque. Fermentum ac libero et maximus primis
            litora massa orci. Fames auctor maecenas . <br />
						<br />
            Sagittis himenaeos magna parturient himenaeos dictumst ligula. Amet
            maximus per diam tempor, egestas ullamcorper. Etiam penatibus urna
            nulla praesent volutpat hac. Morbi
					</p>
					<Button
						text={'Meet the teams'}
						color={'trans-white'}
						fullWidth={false}
					/>
				</div>
				<div className={styles['about-teams']}>
					{teams.map((team) =>
						<div key={team.title} className={styles['about-team']}>
							<Image alt={team.title} src={team.icon} height={45} width={45} />
							<p className={styles['about-team-name']}>{team.title}</p>
							<p>{team.description}</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
