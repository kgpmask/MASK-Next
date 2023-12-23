import styles from "@/styles/Home.module.css";
import Banner from "@/components/layout/Banner";
import AboutStuff from "@/components/layout/AboutStuff";
import Updates from "@/components/layout/Updates";
import Policies from "@/components/layout/Policies";
import Link from 'next/link'
import ImageCarousel from '@/components/layout/ImageCarousel';
import VideoCarousel from '@/components/layout/VideoCarousel';
//All necessary import till here

export default function Home() {
	
	const imgs = ["/0021.webp", "/0022.webp","/0023.webp","/0024.webp","/202307-03.webp"];//for testing purpose i am keeping images in public

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
		{ id: 'VxVDJhMU6Zc', name: '[AMV] YLIA x Horimiya' },
		{ id: 'lzvrb4ePxdU', name: '[AMV] Mob Psycho 100' },
		{ id: 'P0NxHvWz1ns', name: '[AMV] Cosplay Event Coverage' },
		{ id: 'w_tkq4syNnI', name: '[AMV] Mushoku Tensei' },
		{ id: 'w_tkq4syNnI', name: '[AMV] Mushoku Tensei' }
	];
	return (
		<>
			{/* Banner */}
			<Banner />

			{/* top container having  updates and about soc stuff */}
			<div className={styles["flex-container"]}>
				<Updates updates={recentPosts} />
				<AboutStuff />
			</div>
			<hr className={styles["flex-break"]}></hr>

			{/* bottom container having image and video carousels  */}
			<div id={styles["bottom-container"]} className={styles["flex-conatainer"]}>
				<div className={styles['top-container']}>

					{/* Art */}
					<div className={styles.container}></div>
					<ImageCarousel imgs={imgs} />
					{/* submit stuff button */}
					<div className={styles["submit-stuff"]} ><Link href="/submissions"><button className={styles["submit-button"]} >Submit your content!</button></Link></div>
				</div>

				{/* Videos */}
				<VideoCarousel videos={videos} />
			</div>
			{/* policies  */}
			<Policies />
			<br />
			<br />
			<div></div>

		</>
	);
}
