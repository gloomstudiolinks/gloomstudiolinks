import Image from "next/image";
import Link from 'next/link';
import { useState } from "react";

export default function Contact() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [subject, setSubject] = useState();
    const [cc, setCC] = useState();
    const [honey, setHoney] = useState();
    const [message, setMessage] = useState();

    return(<div className = "background">
    <div className = "card">
  <Image 
          href="https://www.instagram.com/gloompowder/"
        className = "pfp"
        src="/peachheadset.svg"
        alt="Picture of the author"
        width={150}
        height={150}/>
  <h3>@gloompowder</h3>
  <div className="container">
      <p className = "contact-msg">Message Me!</p>
    <form target="_blank" className = "my-form" action="https://formsubmit.co/willlin1996@gmail.com" method="POST">
    <div className="form-group">
      <div className="form-row">
        <div className = "form-row-I">
        <div className="col">
            <label>Name</label>
          <input type="text" name="name" className="form-control" cols="20" placeholder="Full Name" required value={name}           onChange={(e) => setName(e.target.value)}
/>
        </div>
        <div className = "col">
            <label>Subject</label>
        <input type="text" className = "form-control"  name="_subject" cols="20" placeholder="Subject" value ={subject}           onChange={(e) => setSubject(e.target.value)}
/>
        </div>
            </div>
            <div className = "form-row-II"> 
        <div className="col">
            <label>CC</label>
    <input type="text" className = "form-control" name="_cc" value={cc}    placeholder="CC" cols="20"      onChange={(e) => setCC(e.target.value)}
/>
</div>
        <div className="col">
            <label>Email</label>
          <input type="email" name="email"  className="form-control" cols="20" placeholder="Email" value = {email} required           onChange={(e) => setEmail(e.target.value)}
/>
          <input type="hidden" name="_autoresponse" cols="20" value="Thank you for sending a message, I will get back to you ASAP. " readOnly />

      </div>
      </div>
    </div>
    </div>
    <div className = "col-hidden">
    <div className ="honey">
        <input type="text" name="_honey" value={honey}     cols="20"      onChange={(e) => setHoney(e.target.value)}
></input>
    </div>
    </div>
    <div className="form-group-II">
        <label>Message</label>
      <textarea placeholder="Your Message" className="form-control-II" name="message" rows="8" cols="50" value={message}           onChange={(e) => setMessage(e.target.value)}
 required></textarea>
    </div>
    <div className ="buttons">
    <Link  href="/"><button className = "back-button">Back</button></Link>
    <button type="submit" className="submit-button">Submit</button>
    </div>
  </form>
</div>
  </div>
  </div>)
}