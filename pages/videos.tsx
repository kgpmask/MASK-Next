import React, { useState, useEffect } from 'react';
import HeadContent from '@/components/HeadContent';
import TextPage from '@/components/TextPage';
import Link from '@/components/textpage/InnerLink';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import styles from '@/styles/Videos.module.css';

interface Video {
	name: string;
	link: string;
	type: string;
	attr: string[];
	date: string;
	hype: boolean;
}

interface Props {
	videos?: Video[];
}

const Videos: React.FC<Props> = () => {
	const [vidPosts, setVidPosts] = useState<Video[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch('/api/videos');
				const data = await res.json();

				setVidPosts(
					data.vids.map((post: Video) => ( {
						name: post.name,
						link: post.link,
						type: post.type,
						attr: post.attr,
						date: post.date,
						hype: post.hype
					} ))
				);
			} catch (err) {
				console.error(err);
			}
		};

		fetchData();
	}, []);

	return (
		<>
			<HeadContent
				title='Videos'
				description='Experience the thrill of captivating AMVs created by our talented team at
         Manga and Anime Society Kharagpur [MASK]. Immerse yourself in a world of dynamic video editing,
          mesmerizing soundtracks, and breathtaking visuals.'
			/>
			<TextPage title='Videos'>
				<p className={styles['youtube-promotion']}>
					Check out our video content here or on{' '}
					<Link isRed href='https://www.youtube.com/@maskiitkgp'>
						Youtube
					</Link>
					!
				</p>
			</TextPage>
			<div className={styles['youtube-videos']}>
				{vidPosts.map((video, index) => 
					<div className={styles['youtube-vid']} key={index}>
						<LiteYouTubeEmbed id={video.link.split('v=')[1]} title={video.name} wrapperClass={styles['lite-yt-embed']} />
					</div>
				)}
			</div>
		</>
	);
};

export default Videos;
