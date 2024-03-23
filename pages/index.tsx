import { useEffect, useState } from 'react';
import Link from 'next/link';

import Banner from '@/components/home-page/Banner';
import AboutStuff from '@/components/home-page/AboutStuff';
import Updates from '@/components/home-page/Updates';
import Policies from '@/components/home-page/Policies';
import ImageCarousel from '@/components/home-page/ImageCarousel';
import VideoCarousel from '@/components/home-page/VideoCarousel';

import styles from '@/styles/Home.module.css';

interface Post {
  link: string;
  name: string;
  type: string;
  hype: boolean;
  date: Date;
}

interface Video {
  id: string;
  name: string;
}

interface postItem {
  name: string;
  link: string;
  type: string;
  date?: Date;
  hype: boolean;
}

interface artItem {
  link: string;
}

interface vidItem {
  link: string;
  name: string;
}

const Home: React.FC = () => {
	const [recentPosts, setRecentPosts] = useState<Post[]>([]);
	const [videos, setVideos] = useState<Video[]>([]);
	const [imgs, setImgs] = useState<string[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch('/api/home');
				const data = await res.json();

				setRecentPosts(
					data.posts.map((post: postItem) => ( {
						name: post.name,
						link: post.link,
						type: post.type,
						date: post.date ? new Date(post.date) : undefined,
						hype: post.hype
					} ))
				);

				setVideos(
					data.vids.map((vidItem: vidItem) => {
						const url = new URL(vidItem.link);
						const videoId = url.searchParams.get('v');

						return {
							id: videoId,
							name: vidItem.name
						};
					} )
				);

				setImgs(data.art.map((artItem: artItem) => '/' + artItem.link));
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, []);

	return (
		<>
			{/* Banner */}
			<Banner />

			{/* top container having  updates and about soc stuff */}
			<div className={styles['flex-container']}>
				<Updates updates={recentPosts} />
				<AboutStuff />
			</div>
			<hr className={styles['flex-break']}></hr>

			{/* bottom container having image and video carousels  */}
			<div
				id={styles['bottom-container']}
				className={styles['flex-conatainer']}
			>
				<div className={styles['top-container']}>
					{/* Art */}
					<div className={styles.container}></div>

					<ImageCarousel imgs={imgs} />
					{/* submit stuff button */}
					<div className={styles['submit-stuff']}>
						<Link href="/submissions">
							<button className={styles['submit-button']}>
                Submit your content!
							</button>
						</Link>
					</div>
				</div>

				{/* Videos */}
				<div className={styles['with-controls']} id="vid-main">
					<VideoCarousel videos={videos} />
				</div>
			</div>
			{/* policies  */}
			<Policies />
			<br />
			<br />
			<div></div>
		</>
	);
};

export default Home;
