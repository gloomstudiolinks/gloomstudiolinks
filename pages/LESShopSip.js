import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaWhatsapp, FaCalendarPlus, FaApple, FaTicketAlt } from 'react-icons/fa';
import { FaBluesky } from "react-icons/fa6";
import styles from '../styles/LESJuneVend.module.css';

const EventPage = () => {
  const [timeLeft, setTimeLeft] = useState({ days:0, hours:0, minutes:0, seconds:0 });
  const eventDate = new Date('2023-12-31T19:00:00').getTime();
  const eventLocation = '49+Monroe+Street,+New+York,+NY+10002';
  const eventTitle = "LES Shop and Sip";
  const eventUrl    = 'https://partiful.com/e/nsgGfSDBzCnvK1Pe7CN6?f=1&photo=all';
  const shareText   = `Join me at ${eventTitle}!`;
  const startTime = new Date(2025, 5, 21, 12, 0, 0).getTime();
  const endTime   = new Date(2025, 5, 21, 18, 0, 0).getTime();

  const timer = setInterval(() => {
      const now = Date.now();
      let target, phase;

      if (now < startTime) {
        // before 12 PM: countdown to start
        target = startTime;
        phase = 'pre';
      } else if (now <= endTime) {
        // between 12 PM–6 PM: countdown to end
        target = endTime;
        phase = 'live';
      } else {
        // after 6 PM: event over
        clearInterval(timer);
        setTimeLeft({ days:0, hours:0, minutes:0, seconds:0 });
        return;
      }

      const diff = target - now;
      const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
      // optional: you could store `phase` in state to switch labels from “Starts in” → “Ends in”
    }, 1000);


  const socialLinks = {
    bluesky: `https://bsky.app/intent/compose?${new URLSearchParams({
      text: `${shareText} ${eventUrl}`
    })}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${shareText} ${eventUrl}`)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(eventUrl)}&title=${encodeURIComponent(eventTitle)}&summary=${encodeURIComponent(shareText)}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareText} ${eventUrl}`)}`
  };

return (
  <>
    <Head>
      <title>Studio Gloom Events</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/gloomstudiologo.png"/>
    </Head>
    
    <div className={styles.container}>
      <div className={styles.hero}>
        <Link href="/" rel="noreferrer">
        
        <div className={styles.eventBadge}>Back</div>
        </Link>
        <h1 className={styles.eventHeader}>{eventTitle}</h1>
        
        <h4 className={styles.subtitle}>June 21, 2025, 12pm-6pm</h4>
        <h4 className={styles.subtitle}>The Monroe Café, 49 Monroe St, New York, NY 10002</h4>
        <p className={styles.summary}>
        LES Vend brings together a curated lineup of artisans—think handcrafted jewelry, indie zines, specialty treats, and more—right inside The Monroe Café on the Lower East Side. Whether you’re hunting for the perfect gift or just want to support NYC’s vibrant maker scene, you’ll find something to love!</p>
        <div className={styles.countdown}>
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className={styles.timeBlock}>
              <span className={styles.number}>{value.toString().padStart(2, '0')}</span>
              <span className={styles.label}>{unit}</span>
            </div>
          ))}
        </div>
        <div className={styles.ctaContainer}>
          <Link href="https://partiful.com/e/nsgGfSDBzCnvK1Pe7CN6" target="_blank" rel="noreferrer" className={styles.ctaButton}>
            <FaTicketAlt /> RSVP
          </Link>
          <div className={styles.buttonGroup}>
            <Link rel="noreferrer" target="_blank" href="https://calendar.app.google/EG3tx5WvVc8NK6949">            
              <button className={styles.calendarButton}>
              <FaCalendarPlus /> Calendar
            </button>
            </Link>
          </div>
        </div>
        <div className={styles.socialShare}>
        <div className={styles.socialIcons}>
        <div className={styles.socialIcons}>
            <Link href={socialLinks.bluesky} target="_blank" rel="noreferrer" className={styles.bluesky}>
            <FaBluesky />
            </Link>
            <Link href={socialLinks.twitter} target="_blank" rel="noreferrer" className={styles.twitter}>
              <FaTwitter />
            </Link>
            <Link href={socialLinks.linkedin} target="_blank" rel="noreferrer" className={styles.linkedin}>
              <FaLinkedinIn />
            </Link>
            <Link href={socialLinks.whatsapp} target="_blank" rel="noreferrer" className={styles.whatsapp}>
              <FaWhatsapp />
            </Link>
          </div>
        </div>
      </div>
      </div>

    </div>
  </>
);
};

export default EventPage;