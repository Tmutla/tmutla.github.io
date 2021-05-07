import Head from 'next/head'
import Image from 'next/image'
import styles from '/styles/Home.module.css'

// import Nav from '../component/Nav/Nav'
import HeroBlockIntro from '/component/HeroBlockIntro/HeroBlockInro'
import Footer from '/component/Footer/Footer'

export default function Home() {
  return (
    <div className="flex flex-col">
      <Head>
        <title>Tmutla</title>
        <meta name="description" content="Tmutla Security" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1> */}
{/* 
				<Nav /> */}
				<HeroBlockIntro />

        
        
      </main>

			<Footer />

			
      
    </div>
  )
}
