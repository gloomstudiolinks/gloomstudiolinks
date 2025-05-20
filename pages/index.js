import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import SocialMedia from '../components/SocialMedia'
import DeadlineBanner from '../components/DeadlineBanner';
import Link from 'next/link';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <DeadlineBanner/>
      <Head>
        <title>Gloompowder Links</title>
        <meta name="description" content="Gloompowder's Links" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/gloomstudiologo.png"/>
      </Head>
      <main>
        <div className = "background">
          <div className = "card">
        <Image 
              className = "pfp"
              src="/gloomstudiologo.png"
              alt="@studiogloom logo"
              width={150}
              height={150}/>
        <h3>@studiogloom</h3>
        <SocialMedia />
        <div className ="links">
          <Link href="/LESShopSip" target="_blank" rel="noreferrer">LES Shop + Sip </Link>
        <Link href="/events" target = "_self" >
            events
          </Link>
          {/* <Link href="https://www.studiogloom.shop/" target="_blank" rel="noreferrer">
            online shop
          </Link> */}
          {/* <Link href="https://www.instagram.com/studiogloom/" className='commissions' target="_blank" rel="noreferrer">
            commissions
          </Link> */}
                    <Link href="https://willportfolio.vercel.app" target="_blank" rel="noreferrer">
            software development
          </Link>
          <Link href="https://willlin1996.wixsite.com/portfolio" target="_blank" rel="noreferrer">
            graphic design
          </Link>
          <Link href="contact" target = "_self" >
            contact
          </Link>
          </div>
        </div>
        </div>
      </main>
    </>
  )
}
