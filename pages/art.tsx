import React, { useState, useEffect } from 'react';
import HeadContent from '@/components/HeadContent';
import TextPage from '@/components/TextPage';
import Link from '@/components/textpage/InnerLink';
import styles from '@/styles/Art.module.css';
import Loading from '@/components/Loading';

interface ArtImage {
	name: string;
	link: string;
	type: string;
	attr: string[];
	date: string;
	hype: boolean;
}

const ArtPage: React.FC = () => {
	const [artPosts, setArtPosts] = useState<ArtImage[]>([]);
	const [isLoaded, setIsLoaded] = useState<boolean>(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch('/api/art');
				const data = await res.json();

				setArtPosts(
					data.art.map((post: ArtImage) => ({
						name: post.name,
						link: '/art/' + post.link,
						type: post.type,
						attr: post.attr,
						date: post.date,
						hype: post.hype,
					}))
				);

				setIsLoaded(true);
			} catch (err) {
				console.error(err);
				setIsLoaded(true);
			}
		};

		fetchData();
	}, []);

	return (
		<>
			<HeadContent
				title='Art'
				description='View some amazing artwork created by our DNA team.
       From traditional to digital to even unconvential, we have it all.'
			/>
			{!isLoaded ? (
				<Loading />
			) : (
				<>
					<TextPage title='Art'>
						<p className={styles['insta-promotion']}>
							Check out our content on here or on{' '}
							<Link isRed href='https://www.instagram.com/maskiitkgp'>
								Instagram
							</Link>
							!
						</p>
					</TextPage>
					<section id='photos' className={styles['photos']}>
						{artPosts.map((img, index) => (
							<div className={styles['imgContainer']} key={index}>
								<img
									id={`img-${index}`}
									src={img.link}
									// style={{
									// 	height: `calc(var(--col-width) * ${img.metadata.height} / ${img.metadata.width})`,
									// }}
									loading='lazy'
									alt={img.name}
								/>
								<div className={styles['overlay']}>
									<h1>{img.name.replace('Art - ', '')}</h1>
									<h3>{img.attr.join(', ')}</h3>
								</div>
							</div>
						))}
					</section>
				</>
			)}
		</>
	);
};

export default ArtPage;
