import Image from "next/image";
import Link from 'next/link';
import { useState } from "react";
import styles from '../styles/contact.module.css'
import DeadlineBanner from '../components/DeadlineBanner';


export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [cc, setCC] = useState('');
  const [honey, setHoney] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="background">
      <DeadlineBanner/>
      <div className="card">
        <Image
          href="https://www.instagram.com/gloompowder/"
          className="pfp"
          src="/gloomstudiologo.png"
          alt="@studiogloom logo"
          width={150}
          height={150}
        />
        <h3>@gloompowder</h3>
        <div className="container">
          <p className="contact-msg">Message Me!</p>
          <form
            action="https://formsubmit.co/willlin1996@gmail.com"
            method="POST"
            target="_blank"
            className="my-form"
          >
            <div className="form-group">
              <div className="form-row">
                <div className="col">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Full Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="col">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="_subject"
                    className="form-control"
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col">
                  <label htmlFor="cc">CC</label>
                  <input
                    type="text"
                    id="cc"
                    name="_cc"
                    className="form-control"
                    placeholder="CC"
                    value={cc}
                    onChange={(e) => setCC(e.target.value)}
                  />
                </div>
                <div className="col">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="hidden"
                    name="_autoresponse"
                    value="Thank you for sending a message, I will get back to you ASAP."
                    readOnly
                  />
                </div>
              </div>
            </div>

            {/* Honeypot field */}
            <input
              type="text"
              name="_honey"
              value={honey}
              onChange={(e) => setHoney(e.target.value)}
              style={{ display: 'none' }}
            />

            <div className="form-group-II">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-control-II"
                rows="8"
                cols="48"
                placeholder="Your Message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="buttons">
              <Link href="/">
                <button type="button" className="back-button">Back</button>
              </Link>
              <button type="submit" className="submit-button">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
