import React from 'react';
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

const Videos: React.FC<Props> = ({ videos = [] }) => {
  const sampleVideos: Video[] = [
    {
      "name": "How to get into MASK",
      "link": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "type": "youtube",
      "attr": [
        "Parth Mane"
      ],
      "date": "2009-10-24T18:30:00.000Z",
      "hype": true
    },
    {
      "name": "「AMV」The Garden of Words - A Thousand Years",
      "link": "https://www.youtube.com/watch?v=9W4eyQ7LP7g",
      "type": "youtube",
      "attr": [
        "Hrishabh Kumar Tundwar"
      ],
      "date": "2023-01-09T18:30:00.000Z",
      "hype": true
    },
    {
      "name": "「AMV」Assassination Classroom - Heathens",
      "link": "https://www.youtube.com/watch?v=unITcghHNVI",
      "type": "youtube",
      "attr": [
        "Chiranjeet Mishra"
      ],
      "date": "2023-01-09T18:30:00.000Z",
      "hype": true
    },
  ];

  const displayedVideos = videos && videos.length ? videos : sampleVideos;

  return (
    <>
      <HeadContent title='Videos' description="Experience the thrill of captivating AMVs created by our talented team at Manga and Anime Society Kharagpur [MASK]. Immerse yourself in a world of dynamic video editing, mesmerizing soundtracks, and breathtaking visuals." />
      <TextPage title='Videos'>
				<p>
        Check out our video content here or on {' '}
					<Link href='https://www.youtube.com/@maskiitkgp'>
            Youtube
					</Link>
					!
				</p>
			</TextPage>
      <div className={styles['youtube-videos']}>
        {displayedVideos.map((video, index) => (
          <div className={styles['youtube-vid']} key={index}>
            <LiteYouTubeEmbed
              id={video.link.split('v=')[1]}
              title={video.name}
              wrapperClass={styles['lite-yt-embed']}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Videos;
