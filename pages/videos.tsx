import HeadContent from '@/components/HeadContent';
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

// This is right. Right?
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


// The actual code
  return (
    <div className='content'>
      <div className="text">
        Check out our video content here or on{' '}
        <a href="https://www.youtube.com/@maskiitkgp" className="link" target="_blank">
          YouTube
        </a>
        !
      </div>
      <div className="youtube-videos">
        {displayedVideos.map((video, index) => (
          <div className={styles['youtube-vid']} key={index}>
            <iframe
              width="100%"
              height="100%"
              src={video.link}
              title={video.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
