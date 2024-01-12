import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import HeadContent from '@/components/HeadContent';
import TextPage from '@/components/TextPage';
import Link from '@/components/textpage/InnerLink';

import styles from '@/styles/Videos.module.css';

export default function VideosPage () {
	const videos = [
		{ id: 'VxVDJhMU6Zc', name: '[AMV] YLIA x Horimiya' },
		{ id: 'lzvrb4ePxdU', name: '[AMV] Mob Psycho 100' },
		{ id: 'P0NxHvWz1ns', name: '[AMV] Cosplay Event Coverage' },
		{ id: 'w_tkq4syNnI', name: '[AMV] Mushoku Tensei' },
		{ id: 'HM1ld5vIqFg', name: 'MASK Freshers Intro Video (2022-2023)' },
		{ id: 'f4muqjlSwYI', name: '「AMV」 Fullmetal Alchemist : Brotherhood-Bones' },
		{ id: 'zJJGrPb8ymE', name: '「AMV」 The Eminence in Shadow - Space Melody' },
		{ id: 'oXpj4H9Qrcw', name: '「AMV」No Game No Life - Blood // Water' },
		{ id: 'HCl4m9ojMMc', name: '「AMV」That Time I Got Reincarnated as a Slime - Rise Up' },
		{ id: 'unITcghHNVI', name: '「AMV」Assassination Classroom - Heathens' },
		{ id: 'swFVafJvVac', name: '「AMV」Gakuen Babysitters - Paathashala Loo' },
		{ id: '9W4eyQ7LP7g', name: '「AMV」The Garden of Words - A Thousand Years' },
		{ id: 'GX7TAigwZPw', name: '「AMV」Phantasy Star Online 2 - Symphony' },
		{ id: '0TJkcTWEu9c', name: '「AMV」Your Lie In April - Buniyaad' },
		{ id: 'S1pFkcsuMYE', name: '「AMV」 My Hero Academia - BEGGIN' },
		{ id: 'yhtxX3JkShI', name: '「AMV」Fate Series - Whatever It Takes' },
		{ id: 'u7jJ2coeBRo', name: '「AMV」Dont Toy With Me Miss' }
	];

	return <>
		<HeadContent
			title="Videos"
			description="Experience the thrill of captivating AMVs created by our talented team at Manga and Anime Society Kharagpur [MASK]. Immerse yourself in a world of dynamic video editing, mesmerizing soundtracks, and breathtaking visuals."
			keywords={['Videos', 'AMV', 'Music', 'Coverage', 'Anime Music Video', 'Edits', 'YouTube']}
		/>
		<TextPage>
			<p style={{ textAlign: 'center' }}>Check out our video content here or on <Link isRed href="https://www.youtube.com/@maskiitkgp">YouTube</Link></p>
		</TextPage>
		<div className={styles['youtube-videos']}>
			{ videos.map(( { id, name } ) => <LiteYouTubeEmbed key={id}
				id={id}
				title={name}
				wrapperClass={styles['youtube-vid'] + ' yt-lite'}
				// iframeClass={styles['iframe']}
				containerElement='div'
				// aspectHeight={315}
				// aspectWidth={565}
			/>) }
		</div>
	</>;
}
