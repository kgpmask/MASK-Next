import React from 'react';
import HeadContent from '@/components/HeadContent';
import TextPage from '@/components/TextPage';
import Link from '@/components/textpage/InnerLink';
import styles from '@/styles/Art.module.css';

interface ArtImage {
  name: string;
  link: string;
  type: string;
  attr: string[];
  date: string;
  hype: boolean;
}

const getRandomImageURL = () => {
	const randomWidth = Math.floor(Math.random() * 400) + 200; // Random width between 200 and 600
	const randomHeight = Math.floor(Math.random() * 400) + 200; // Random height between 200 and 600
	return `https://picsum.photos/${randomWidth}/${randomHeight}`;
};

const artData: ArtImage[] = [
	{
		'name': 'Art - Tanjiro Kamado',
		'link': getRandomImageURL(),
		'type': 'art',
		'attr': ['Sanjeev Raj Ganji'],
		'date': '2021-08-29T18:30:00.000Z',
		'hype': true
	},
	{
		'name': 'Art - Saitama',
		'link': getRandomImageURL(),
		'type': 'art',
		'attr': ['Garima Mendhe'],
		'date': '2021-08-13T18:30:00.000Z',
		'hype': true
	},
	{
		'name': 'Art - Kirigakure Shinobi Massacre',
		'link': getRandomImageURL(),
		'type': 'art',
		'attr': ['Arpit Das'],
		'date': '2020-05-12T18:30:00.000Z',
		'hype': true
	},
	{
		'name': 'Art - Garou',
		'link': getRandomImageURL(),
		'type': 'art',
		'attr': ['Pritam Mallick'],
		'date': '2019-10-28T00:00:00.000Z',
		'hype': true
	},
	{
		'name': 'Art - Tanjiro Kamado',
		'link': getRandomImageURL(),
		'type': 'art',
		'attr': ['Sanjeev Raj Ganji'],
		'date': '2021-08-29T18:30:00.000Z',
		'hype': true
	},
	{
		'name': 'Art - Saitama',
		'link': getRandomImageURL(),
		'type': 'art',
		'attr': ['Garima Mendhe'],
		'date': '2021-08-13T18:30:00.000Z',
		'hype': true
	},
	{
		'name': 'Art - Kirigakure Shinobi Massacre',
		'link': getRandomImageURL(),
		'type': 'art',
		'attr': ['Arpit Das'],
		'date': '2020-05-12T18:30:00.000Z',
		'hype': true
	},
	{
		'name': 'Art - Garou',
		'link': getRandomImageURL(),
		'type': 'art',
		'attr': ['Pritam Mallick'],
		'date': '2019-10-28T00:00:00.000Z',
		'hype': true
	},
	{
		'name': 'Art - Tanjiro Kamado',
		'link': getRandomImageURL(),
		'type': 'art',
		'attr': ['Sanjeev Raj Ganji'],
		'date': '2021-08-29T18:30:00.000Z',
		'hype': true
	},
	{
		'name': 'Art - Saitama',
		'link': getRandomImageURL(),
		'type': 'art',
		'attr': ['Garima Mendhe'],
		'date': '2021-08-13T18:30:00.000Z',
		'hype': true
	},
	{
		'name': 'Art - Kirigakure Shinobi Massacre',
		'link': getRandomImageURL(),
		'type': 'art',
		'attr': ['Arpit Das'],
		'date': '2020-05-12T18:30:00.000Z',
		'hype': true
	},
	{
		'name': 'Art - Garou',
		'link': getRandomImageURL(),
		'type': 'art',
		'attr': ['Pritam Mallick'],
		'date': '2019-10-28T00:00:00.000Z',
		'hype': true
	},
	{
		'name': 'Art - Tanjiro Kamado',
		'link': getRandomImageURL(),
		'type': 'art',
		'attr': ['Sanjeev Raj Ganji'],
		'date': '2021-08-29T18:30:00.000Z',
		'hype': true
	},
	{
		'name': 'Art - Saitama',
		'link': getRandomImageURL(),
		'type': 'art',
		'attr': ['Garima Mendhe'],
		'date': '2021-08-13T18:30:00.000Z',
		'hype': true
	},
	{
		'name': 'Art - Kirigakure Shinobi Massacre',
		'link': getRandomImageURL(),
		'type': 'art',
		'attr': ['Arpit Das'],
		'date': '2020-05-12T18:30:00.000Z',
		'hype': true
	},
	{
		'name': 'Art - Garou',
		'link': getRandomImageURL(),
		'type': 'art',
		'attr': ['Pritam Mallick'],
		'date': '2019-10-28T00:00:00.000Z',
		'hype': true
	},
	{
		'name': 'Art - Tanjiro Kamado',
		'link': getRandomImageURL(),
		'type': 'art',
		'attr': ['Sanjeev Raj Ganji'],
		'date': '2021-08-29T18:30:00.000Z',
		'hype': true
	},
	{
		'name': 'Art - Saitama',
		'link': getRandomImageURL(),
		'type': 'art',
		'attr': ['Garima Mendhe'],
		'date': '2021-08-13T18:30:00.000Z',
		'hype': true
	},
	{
		'name': 'Art - Kirigakure Shinobi Massacre',
		'link': getRandomImageURL(),
		'type': 'art',
		'attr': ['Arpit Das'],
		'date': '2020-05-12T18:30:00.000Z',
		'hype': true
	},
	{
		'name': 'Art - Garou',
		'link': getRandomImageURL(),
		'type': 'art',
		'attr': ['Pritam Mallick'],
		'date': '2019-10-28T00:00:00.000Z',
		'hype': true
	},
	{
		'name': 'Art - Tanjiro Kamado',
		'link': getRandomImageURL(),
		'type': 'art',
		'attr': ['Sanjeev Raj Ganji'],
		'date': '2021-08-29T18:30:00.000Z',
		'hype': true
	},
	{
		'name': 'Art - Saitama',
		'link': getRandomImageURL(),
		'type': 'art',
		'attr': ['Garima Mendhe'],
		'date': '2021-08-13T18:30:00.000Z',
		'hype': true
	},
	{
		'name': 'Art - Kirigakure Shinobi Massacre',
		'link': getRandomImageURL(),
		'type': 'art',
		'attr': ['Arpit Das'],
		'date': '2020-05-12T18:30:00.000Z',
		'hype': true
	},
	{
		'name': 'Art - Garou',
		'link': getRandomImageURL(),
		'type': 'art',
		'attr': ['Pritam Mallick'],
		'date': '2019-10-28T00:00:00.000Z',
		'hype': true
	}
];

const ArtPage: React.FC = () => {
	return (
		<>
			<HeadContent title='Art' description='View some amazing artwork created by our DNA team.
       From traditional to digital to even unconvential, we have it all.' />
			<TextPage title='Art'>
				<p className={styles['insta-promotion']}>
          Check out our content on here or on{' '}
					<Link isRed href='https://www.instagram.com/maskiitkgp'>
            Instagram
					</Link>
          !
				</p>
			</TextPage>
			<section id="photos" className={styles['photos']}>
				{artData.map((img, index) => 
					<div className={styles['imgContainer']} key={index}>
						<img
							id={`img-${index}`}
							src={img.link}
							loading="lazy"
							alt={img.name}
						/>
						<div className={styles['overlay']}>
							<h1>{img.name.replace('Art - ', '')}</h1>
							<h3>{img.attr.join(', ')}</h3>
						</div>
					</div>
				)}
			</section>
		</>
	);
};

export default ArtPage;
