import React from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

interface Video {
  name: string;
  link: string;
  type: string;
  attr: string[];
  date: string;
  hype: boolean;
}

interface Props {
  videos: Video[];
}

const Videos: React.FC<Props> = ({ videos }) => {
  const videosData: Video[] = [
    {
      name: "「AMV」The Garden of Words - A Thousand Years",
      link: "https://www.youtube.com/watch?v=9W4eyQ7LP7g",
      type: "youtube",
      attr: ["Hrishabh Kumar Tundwar"],
      date: "2023-01-09T18:30:00.000Z",
      hype: true
    },
    {
      name: "「AMV」Assassination Classroom - Heathens",
      link: "https://www.youtube.com/watch?v=unITcghHNVI",
      type: "youtube",
      attr: ["Chiranjeet Mishra"],
      date: "2023-01-09T18:30:00.000Z",
      hype: true
    }
    // Add more video data as needed
  ];

  // Use videos prop if available, else use the dummy data
  const displayedVideos = videos && videos.length > 0 ? videos : videosData;

  if (!displayedVideos || displayedVideos.length === 0) {
    return <div>No videos available</div>;
  }

  return (
    <div>
      <div className="text">
        Check out our video content here or on{' '}
        <a href="https://www.youtube.com/@maskiitkgp" className="link" target="_blank">
          YouTube
        </a>
        !
      </div>
      <div className="youtube-videos">
        {displayedVideos.map((vid, index) => (
          <div className="youtube-vid" id={`vid-${index}`} key={`vid-${index}`}>
            <iframe
              width="100%"
              height="100%"
              src={vid.link}
              title={vid.name}
              frameBorder="0"
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
