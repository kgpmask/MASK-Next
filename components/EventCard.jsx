/**
 * EventCard component renders an event card with an image, title, date, and location.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.event - The event data.
 * @param {string} props.event.image - The URL of the event image.
 * @param {string} props.event.title - The title of the event.
 * @param {string} props.event.date - The date of the event.
 * @param {string} props.event.location - The location of the event.
 * @returns {JSX.Element} The rendered event card component.
 */
import React from 'react';
import Image from 'next/image';
import './styles/EventCard.module.css';
import './styles/globals.css';

export default function EventCard({ event }) { 
  return (
    <div className="event-card">
      <Image
        src={event.image}
        alt={event.title}
        width={300}
        height={200}
        className = "event-card-image"
      />
      <h3>{event.title}</h3>
      <p className = "event-card-meta"> {event.date} </p>
      <p className = "event-card-meta"> {event.venue} </p>
      <p className = "event-card-meta"> {event.author} </p>
      <h4>
        {event.description}
      </h4>
    </div>
  );
}

