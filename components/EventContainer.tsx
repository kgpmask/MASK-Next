import React, { useEffect } from 'react';

interface EventProps {
  title: string;
  date: string;
  venue: string;
  author: string;
  description: string;
  link: string;
}

const Event: React.FC<EventProps> = ({ title,date,venue,author,description,link }) => (
    <><div className="event-container">
        <a href={/events/$} {...link} />} title={title}>
        <div className="image-container">
            <img src={/assets/events / $} {...link} />.jpg} alt={title} />
        </div>
    </a><div className="details">
            <h2>
                <a href={/events/$} {...link} />} title={title}>
                {title}
                </a>
      </h2>
      <p>
        <span>Date: </span> {date} <br />
        <span>Venue: </span> {venue} <br />
        <span>Author: </span> {author}
      </p>
      <p { description } />
      <br />
      <a href={/events/${link}} title={title}>
        Read More...
      </a>
    </div>
  </div>
);
export default EventContanier