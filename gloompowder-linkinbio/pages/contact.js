import Image from "next/image";
import Link from 'next/link';

export default function Contact() {
    const fname = "";
    const subject = "";
    const message = "";
    const honey = "";
 
    const honeyCheck = ()=>{
        return honey != "" ? true : false;
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        document.getElementById("my-form").reset();
    };

    const handleName = (e)=>{
        console.log(e.target);
    };
    const handleSubject = (e)=>{
        console.log(e.target);
    };
    const handleEmail = (e)=>{
        console.log(e.target);
    };
    const handleMessage = (e)=>{
        console.log(e.target);
    };

    return(<div className = "background">
    <div className = "card">
  <Image 
        className = "pfp"
        src="/peachheadset.svg"
        alt="Picture of the author"
        width={150}
        height={150}/>
  <h3>@gloompowder</h3>
  <div className="container">
  <h4>Leave a Message</h4>
  <form target="_blank" className = "my-form" action="https://formsubmit.co/willlin1996@gmail.com" method="POST">
    <div className="form-group">
      <div className="form-row">
        <div className="col">
          <input type="text" name="name" className="form-control" placeholder="Full Name" required />
        </div>
        <div className = "col">
        <input type="text" className = "form-control" name="_subject" placeholder="Subject"/>
        </div>
        <div className="col">
          <input type="email" name="email" className="form-control" placeholder="Email Address" required/>
          <input type="hidden" name="_autoresponse" value="Thank you for sending a message to @gloompowder, I will get back to you ASAP. "/>
        </div>
      </div>
    </div>
    <div className ="honey">
        <input type="text" name="_honey"></input>
    </div>
    <div className="form-group">
      <textarea placeholder="Your Message" className="form-control" name="message" rows="8" cols="30" required></textarea>
    </div>
    <div className ="buttons">
    <Link className ="back-button" href="/">Back</Link>
    <button type="submit" onClick="" className="submit-button">Submit</button>
    </div>
  </form>
</div>
  </div>
  </div>)
}