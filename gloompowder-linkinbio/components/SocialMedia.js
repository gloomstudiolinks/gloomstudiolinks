import Image from 'next/image'
export default function SocialMedia(){
    return(
        <div className ="socialmedia">
        <Image 
              src="/instagram.svg"
              alt="instagram icon"
              width={75}
              height={75}/>  
        <Image 
              src="/mail.svg"
              alt="email icon"
              width={75}
              height={75}/>  
        <Image 
              src="/redbubble.svg"
              alt="redbubble icon"
              width={75}
              height={75}/>
        </div>
    )
}