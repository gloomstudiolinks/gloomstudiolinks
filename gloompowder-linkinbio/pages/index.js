import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
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
              src="/gloomdiscord.png"
              alt="Picture of the author"
              width={150}
              height={150}/>
        <h4>@gloompowder</h4>
        <SocialMedia />
        <div className ="links">
          <a className='commissions'>
            illustration commisions coming soon
          </a>
          <a>
            email
          </a>
          <a>
            graphic design
          </a>
          <a>
            shop
          </a>
          <a>
            food blog coming soon
          </a>
          <a>
            bake shop coming soon
          </a>
          <a>
            shop my closet!
          </a>
          </div>
        </div>
        </div>
      </main>
    </>
  )
}
