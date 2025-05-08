import Image from "next/image";
import Link from 'next/link';
import { useState } from "react";
import events from '../components/Events';
import DeadlineBanner from '../components/DeadlineBanner';


export default function Contact() {
  const imageStyle = { width: '100%', height: 'auto' };

  const today = new Date();
  const upcomingEvents = events.filter(e => e.dateStart >= today);
  const pastEvents = events.filter(e => e.dateStart < today);

  const formatDateRange = (start, end) => {
    const options = { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    const startStr = start.toLocaleString('en-US', options);
    if (end) {
      const endOptions = { hour: 'numeric', minute: 'numeric' };
      const endStr = end.toLocaleString('en-US', endOptions);
      return `${startStr} – ${endStr}`;
    }
    return startStr;
  };

  return (
    <div className="background">
        <DeadlineBanner/>
      <div className="card">
        {/* Logo and Tag */}
        <a href="https://www.instagram.com/studiogloom/" target="_blank" rel="noreferrer">
          <Image className="pfp" src="/gloomstudiologo.png" alt="@studiogloom logo" width={150} height={150} />
        </a>
        <a href="https://www.instagram.com/studiogloom/" target="_blank" rel="noreferrer">
        </a>
        <h3>@studiogloom</h3>
        <Link href="/">
          <button className="back-button">Back</button>
        </Link>

        <div className="Events-background">
          <div className="Eventsdiv">
            <h1>Upcoming Events</h1>
            {upcomingEvents.length === 0 ? (
              <h4>No upcoming events</h4>
            ) : (
              upcomingEvents.map(event => (
                <div className="Eventspair" key={event.id}>
                  <a className="event-link" href={event.eventLink} target="_blank" rel="noreferrer" alt={`${event.title} Link`}>
                    <Image alt={event.imageAlt} className="studio-gloom-flyer" src={event.imageSrc} width={100} height={100} style={imageStyle} />
                  </a>
                  <div className="event-description">
                    <p>{event.title}</p>
                    <p>What: {event.what}</p>
                    <a href={event.location.link} target="_blank" rel="noreferrer">
                      <p>Where: {event.location.text}</p>
                    </a>
                    <p>When: {formatDateRange(event.dateStart, event.dateEnd)}</p>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="EventsDiv">
            <h1>Past Events</h1>
            {pastEvents.length === 0 ? (
              <h4>No past events</h4>
            ) : (
              pastEvents.map(event => (
                <div className="Eventspair" key={event.id}>
                  <a className="event-link" href={event.eventLink} target="_blank" rel="noreferrer" alt={`${event.title} Link`}>
                    <Image alt={event.imageAlt} className="studio-gloom-flyer" src={event.imageSrc} width={100} height={100} style={imageStyle} />
                  </a>
                  <div className="event-description">
                    <p>{event.title}</p>
                    <p>What: {event.what}</p>
                    <a href={event.location.link} target="_blank" rel="noreferrer">
                      <p>Where: {event.location.text}</p>
                    </a>
                    <p>When: {formatDateRange(event.dateStart, event.dateEnd)}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
