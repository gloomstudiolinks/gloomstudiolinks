import Image from "next/image";
import Link from 'next/link';
import { useState } from "react";

export default function Contact() {
  const imageStyle = { width: '100%', height: 'auto' };

  // Define your events with date objects
  const events = [
    {
      id: 'pridefair',
      title: 'Pride Fair',
      what: 'Vending and Raffle',
      imageSrc: '/pridefairlink.webp',
      imageAlt: 'Pride Fair Flyer',
      eventLink: 'https://www.elmfoundation.art/events-1/pride-fair',
      location: {
        text: 'Brooklyn, 191 N 14th St, Brooklyn, NY 11249, USA',
        link: 'https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=M3Z1ZjJpaHNiaTRyNnZhb2tvY2Q2Y3Q0a2Egd2lsbGxpbjE5OTZAbQ&amp;tmsrc=willlin1996%40gmail.com'
      },
      dateStart: new Date(2025, 5, 10, 12, 0),
      dateEnd: new Date(2025, 5, 11, 18, 0),
    },
    {
      id: 'translove',
      title: 'Trans Love Pop Up',
      what: 'First In-person Vendor/Grand Opening',
      imageSrc: '/studio-gloom-flyer.png',
      imageAlt: 'Trans Love Pop Up Flyer',
      eventLink: 'https://gaycenter.org/trans-love/',
      location: {
        text: '208 W 13 St New York, NY 10011',
        link: 'https://goo.gl/maps/R7WoZ1hHMKTsk9Tu9'
      },
      dateStart: new Date(2023, 2, 31, 12, 0),
    }
  ];

  const today = new Date();
  const upcomingEvents = events.filter(e => e.dateStart >= today);
  const pastEvents     = events.filter(e => e.dateStart < today);

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
      <div className="card">
        {/* Logo and Tag */}
        <a href="https://www.instagram.com/studiogloom/" target="_blank" rel="noreferrer">
          <Image className="pfp" src="/gloomstudiologo.png" alt="@studiogloom logo" width={150} height={150} />
        </a>
        <a href="https://www.instagram.com/studiogloom/" target="_blank" rel="noreferrer">
          <h3>@studiogloom </h3>
        </a>

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
