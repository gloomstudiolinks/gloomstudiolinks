import Image from "next/image";
import Link from 'next/link';
import { useState } from "react";

export default function Contact() {
    const imageStyle = {
        width:'100%',
        height:'auto',
    };
    return(
        <div className = "background">
    <div className = "card">
    <Image 
        className = "pfp"
        src="/gloomstudiologo.png"
        alt="@studiogloom logo"
        width={150}
        height={150}/>
  <h3>@gloompowder</h3>
        <div className = "Events-background">
        <div className = "Eventsdiv">
        <h1>Upcoming Events</h1>
        {/* <h4>no upcoming events</h4> */}
        <a className = "pridefair-link" href="https://www.elmfoundation.art/events-1/pride-fair" target="_blank" rel="norefferer" alt="Pride Fair Link">           
        <Image 
              className = "studio-gloom-flyer"
              src="/pridefairlink.webp"
              width='100'
              height='100'
              style={imageStyle}/></a>
                          <div className ="event-description">
                <p>
                    Pride Fair
                </p>
                <p>What: Vending and Raffle</p>
                <a target="_blank" href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=M3Z1ZjJpaHNiaTRyNnZhb2tvY2Q2Y3Q0a2Egd2lsbGxpbjE5OTZAbQ&amp;tmsrc=willlin1996%40gmail.com">
                <p>Where: Brooklyn, 191 N 14th St, Brooklyn, NY 11249, USA</p>
                <p>When: Jun 10, 12:00 PM – Jun 11, 6:00 PM</p>
                </a>
                <div className = "event-details"></div>
            </div>
        {/* <div className="Eventspair">
<a className = "lgbtcenter-link" href="https://gaycenter.org/trans-love/" target="_blank" rel="norefferer">
        <Image 
        width="100"
        height="100"
objectFit='contain'
alt='under construction'
              src="/under_construction.png"
              style={imageStyle}/>
                      </a>
            <div className ="event-description">
                <p>
                    Online Grand Opening
                </p>
                <p>Where: https://www.studiogloom.com</p>
                <p>When: Saturday, April 8th, 12am EST</p>
                <p></p>
                <div className = "event-details">
                    <p className="setting"></p>
                    <p className="time"></p>
                </div>
            </div>
        </div> */}
        </div>
        <div className = "EventsDiv">
        <h1>Past Events</h1>
        <div className="Eventspair">
        <a className = "lgbtcenter-link" href="https://gaycenter.org/trans-love/" target="_blank" rel="norefferer" alt="Trans Love Pop Up Link">           
        <Image 
              className = "studio-gloom-flyer"
              src="/studio-gloom-flyer.png"
              width='100'
              height='100'
              style={imageStyle}/></a>
            <div className ="event-description">
                <p>
                    Trans Love Pop Up
                </p>
                <p>What: First In-person Vendor/Grand Opening</p>
                <a className = "gmap-link" href="https://goo.gl/maps/R7WoZ1hHMKTsk9Tu9" target="_blank" rel="noreferrer" alt="Google Maps link to location">
                <p>Where: 208 W 13 St New York, NY 10011</p>
                </a>
                <p>When: Friday, March 31st, 2023 12pm-6pm EST</p>
                <div className = "event-details"></div>
            </div>
        </div>
        </div>
        </div>
        <div className ="buttons">
    <Link  href="/"><button className = "back-button">Back</button></Link>
    </div>
        </div>
        </div>
    )
}