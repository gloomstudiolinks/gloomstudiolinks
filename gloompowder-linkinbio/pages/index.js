import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import SocialMedia from '../components/SocialMedia'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Gloompowder Links</title>
        <meta name="description" content="Gloompowder's Links" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className = "background">
          <div className = "card">
        <Image 
              className = "pfp"
              src="/peach in hand.svg"
              alt="Picture of the author"
              width={150}
              height={150}/>
        <h3>@gloompowder</h3>
        <SocialMedia />
        <div className ="links">
          <a href="https://www.instagram.com/willdoodleforcash/" className='commissions' target="_blank" rel="noreferer">
            commission illustration 
          </a>
          <a href="https://willlin1996.wixsite.com/portfolio" target="_blank" rel="noreferer">
            graphic design
          </a>
          <a href="https://gloompowder.github.io" target="_blank" rel="noreferer">
            software development
          </a>
          <a href="https://redbubble.com/shop/gloompowder" target="_blank" rel="noreferer">
            view merch
          </a>
          <a href="contact" target = "_blank" rel="noreferer">
            contact
          </a>
          </div>
        </div>
        </div>
      </main>
    </>
  )
}
