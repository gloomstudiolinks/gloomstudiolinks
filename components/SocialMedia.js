import Image from 'next/image'
import Link from 'next/link'
export default function SocialMedia(){
    return(
        <div className ="socialmedia">
            <Link href="https://www.instagram.com/studiogloom" target="_blank" rel="noreferrer">
            <Image 
              src="/instagram.svg"
              alt="instagram icon"
              width={50}
              height={50}/>  
            </Link>
            <Link href="/contact" target="_blank" rel="noreferrer">
            <Image 
              src="/mail.svg"
              alt="email icon"
              width={50}
              height={50}/>  
            </Link>
            <Link href="https://www.tiktok.com/@studiogloom" target="_blank" rel="noreferrer">
            <Image 
              src="/tiktok.png"
              alt="tiktok icon"
              width={50}
              height={50}/>
            </Link>
        </div>
    )
}