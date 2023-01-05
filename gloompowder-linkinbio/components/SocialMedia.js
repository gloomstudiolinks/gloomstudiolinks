import Image from 'next/image'
export default function SocialMedia(){
    return(
        <div className ="socialmedia">
        <Image 
              src="/instagram.svg"
              alt="instagram icon"
              width={50}
              height={50}/>  
        <Image 
              src="/mail.svg"
              alt="email icon"
              width={50}
              height={50}/>  
        <Image 
              src="/redbubble.svg"
              alt="redbubble icon"
              width={50}
              height={50}/>
        </div>
    )
}