import styles from "@/styles/Home.module.css";
import Banner from "@/components/layout/Banner";
import AboutStuff from "@/components/layout/AboutStuff";
import Updates from "@/components/layout/Updates";
import Policies from "@/components/layout/Policies";
import Link from 'next/link'
import ImageCarousel from '@/components/layout/ImageCarousel';
import VideoCarousel from '@/components/layout/VideoCarousel';


export default function Home() {
	const recentPosts = [
		{ link: 'https://youtu.be/VxVDJhMU6Zc', name: '[AMV] YLIA x Horimiya', type: 'youtube', hype: true, date: new Date() },
		{ link: 'https://youtu.be/lzvrb4ePxdU', name: '[AMV] Mob Psycho 100', type: 'youtube', hype: true, date: new Date() },
		{ link: '/events/one-piece-screening', name: 'One Piece Screening', type: 'event', hype: true },
		{ link: '/newsletters/2023-05-1', name: 'May Newsletter', type: 'newsletter', hype: true },
		{ link: 'https://youtu.be/P0NxHvWz1ns', name: '[AMV] Cosplay Event Coverage', type: 'youtube', hype: true },
		{ link: 'https://youtu.be/w_tkq4syNnI', name: '[AMV] Mushoku Tensei', type: 'youtube', hype: true },
		{ link: 'https://www.instagram.com/reel/CsgS9zQIpdN', name: '[Reel] Oshi No Ko', type: 'instagram', hype: true }
	];

	const videos = [
		"https://www.youtube.com/watch?v=HM1ld5vIqFg",
		"https://www.youtube.com/watch?v=f4muqjlSwYI",
		"https://www.youtube.com/watch?v=zJJGrPb8ymE",

	];
	const images = [
		"https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
		"https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		"https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		"https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		"https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		"https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	];

	return (
		<>
			<Banner />

			<div className={styles["flex-container"]}>
				<Updates updates={recentPosts} />
				<AboutStuff />
			</div>
			<hr className={styles["flex-break"]}></hr>
			<div id={styles["bottom-container"]} className={styles["flex-conatainer"]}>
				<div className={styles['top-container']}>
					{/* Art */}
					<div className={styles['with-controls']}>
						<div className={styles['imgshow-container']}>
							<ImageCarousel images={images} />

						</div>

					</div>
					<div className={styles["submit-stuff"]}><Link href="/submissions"><button className={styles["submit-button"]}>Submit your content!</button></Link></div>
				</div>
				{/* Videos */}
				<div id="vid-main" className="with-controls">
					<div className="vidshow-container">
					<ImageCarousel images={images} />
					</div>
				</div>
			</div>
			<Policies />
			<br />
			<br />
			<div></div>

		</>
	);
}
